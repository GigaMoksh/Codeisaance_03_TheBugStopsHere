// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract Certificate {
    enum Status {Pending, Approved, Rejected}
    struct Cert {
        string userName;
        string fileName;
        string url;
        string id;
        uint256 issueDate;
        string key;
        address user;
        bool isAdded;
        Status status;
    }


    /** Mappings */

    /** Mapping for certificates */
    mapping (address => mapping(string => Cert)) public certificates;


    /** Public functions */

    function addCertificate(
        string memory _userName,
        string memory _fileName,
        string memory _url,
        string memory _id,
        string memory _key,
        address _user
    ) public {
        require(
            certificates[_user][_id].isAdded == false,
            "Certificate must not be already added."
        );

        require(
            bytes(certificates[_user][_id].id).length == 0,
            "Certificate id must not be empty."
        );

        Cert memory cert = Cert({
            userName: _userName,
            fileName: _fileName,
            url: _url,
            id: _id,
            issueDate: block.timestamp,
            key: _key,
            user: _user,
            status: Status.Approved,
            isAdded: true
        });

        certificates[_user][_id] = cert;
    }

    function getCertificate(address _user, string memory _id)
        public
        view
        returns(string memory, string memory, uint256, string memory, string memory, Status) {
            require(
                _user != address(0),
                "User address must not be empty"
            );
            require(
                bytes(_id).length != 0,
                "Certificate id must not be empty."
            );

            return (
                certificates[_user][_id].userName,
                certificates[_user][_id].fileName,
                certificates[_user][_id].issueDate,
                certificates[_user][_id].key,
                certificates[_user][_id].url,
                certificates[_user][_id].status
            );
    }

    function revokeCertificate(address _user, string memory _id) 
        public 
        returns(string memory){
            require(
                _user != address(0),
                "User address must not be empty"
            );
            require(
                bytes(_id).length != 0,
                "Certificate id must not be empty."
            );
            certificates[_user][_id].status = Status.Rejected;
            
            return("Success");
        }
}