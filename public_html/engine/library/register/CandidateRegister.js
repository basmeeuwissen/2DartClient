
namespace('engine.register');

(function()
{
    var NoCandidateFoundException = engine.exceptions.NoCandidateFoundException,
        MultipleCandidatesException = engine.exceptions.MultipleCandidatesException;
    
    engine.register.CandidateRegister = function(name)
    {
        var self = this;
        
        var candidates = [];
        
        self.addCandidate = function(circumstances, value)
        {
            candidates.push({
                circumstances: circumstances,
                value: value
            });
        };
        
        self.findCandidate = function(circumstances, require)
        {
            var matches = [],
                candidate,
                score;
            
            for (var index in candidates)
            {
                candidate = candidates[index];
                
                score = matchCircumstances(candidate.circumstances, circumstances);
                
                if (score !== false)
                {
                    matches.push({
                        score: score,
                        candidate: candidate
                    });
                }
            }
            
            matches.sort(compareCandidates);
            
            candidate = pickCandidate(matches, circumstances);
            
            if (candidate === null && require === true)
            {
                throw new NoCandidateFoundException(name, circumstances);
            }
            
            return candidate;
        };
        
        var matchCircumstances = function(candidateCircumstances, clientCircumstances)
        {
            if (candidateCircumstances.length === 0)
            {
                return 0;
            }
            
            var score = 0;
            
            for (var key in candidateCircumstances)
            {
                if (clientCircumstances[key] === undefined
                ||  clientCircumstances[key] !== candidateCircumstances[key])
                {
                    return false;
                }
                else
                {
                    score++;
                }
            }
            
            return score;
        };
        
        var compareCandidates = function(candidateA, candidateB)
        {
            var a = candidateA.score,
                b = candidateB.score;
        
            if (a === 0)
            {
                return 0;
            }
            
            return a < b;
        };
        
        var pickCandidate = function(matches, circumstances)
        {
            var matchCount = matches.length;
        
            if (matchCount === 0)
            {
                return null;
            }
            else if (matchCount > 1 && matches[0].score === matches[1].score)
            {
                throw new MultipleCandidatesException(circumstances);
            }

            return matches[0].candidate;
        };
    };
})();
