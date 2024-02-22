pragma solidity ^0.8.0;

contract VotingSystem {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public voters;
    mapping(uint => Candidate) public candidates;
    uint public candidatesCount;

    constructor(string[] memory _names) {
        for (uint i = 0; i < _names.length; i++) {
            addCandidate(_names[i]);
        }
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint _candidateId) public {
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        voters[msg.sender] = true;

        candidates[_candidateId].voteCount++;
    }

    function getCandidate(
        uint _candidateId
    ) public view returns (string memory) {
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        return candidates[_candidateId].name;
    }
}
