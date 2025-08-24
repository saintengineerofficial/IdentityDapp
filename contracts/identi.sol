// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Identi {
    struct User {
        string firstName;
        string lastName;
        string username;
        string email;
        string homeAddress;
        string dateOfBirth;
        string education;
        string workHistory;
        string phoneNumber;
        string jobTitle;
        string x;
        string instagram;
        string tiktok;
        string youtube;
        string linkedin;
        string info;
        string[] skills;
        string imageURL;
        bool exists;
        uint[] appliedJobs;
        Visibility visibility;
    }

    struct Visibility {
        bool education;
        bool workHistory;
        bool phoneNumber;
        bool homeAddress;
        bool dateOfBirth;
    }

    struct BasicInfo {
        string firstName;
        string lastName;
        string email;
        string homeAddress;
        string dateOfBirth;
        string phoneNumber;
    }

    struct SocialLinks {
        string x;
        string instagram;
        string tiktok;
        string youtube;
        string linkedin;
    }

    struct ProfessionalInfo {
        string education;
        string workHistory;
        string jobTitle;
        string info;
        string[] skills;
        string imageURL;
    }

    // 用户名称=>用户信息
    mapping(string => User) private users;
    // 地址=>用户名称
    mapping(address => string) private addressToUsername;
    // 用户名称=>是否存在
    mapping(string => bool) private usernames;

    modifier onlyExitUsername(string memory _username) {
        require(usernames[_username], "User does not exist.");
        _;
    }

    modifier onlyUser(string memory _username) {
        require(
            keccak256(bytes(addressToUsername[msg.sender])) ==
                keccak256(bytes(_username)),
            "Not the owner of this profile"
        );
        _;
    }

    function createUser(
        string memory _username,
        BasicInfo memory _basicInfo,
        ProfessionalInfo memory _professionalInfo,
        SocialLinks memory _socialLinks,
        Visibility memory _visibility
    ) public {
        require(!usernames[_username], "Username already exists.");
        // 数据类型 数据状态 数据名称 = 值
        // storage 存储在链上
        User storage user = users[_username];
        user.firstName = _basicInfo.firstName;
        user.lastName = _basicInfo.lastName;
        user.username = _username;
        user.email = _basicInfo.email;
        user.homeAddress = _basicInfo.homeAddress;
        user.dateOfBirth = _basicInfo.dateOfBirth;
        user.phoneNumber = _basicInfo.phoneNumber;
        user.education = _professionalInfo.education;
        user.workHistory = _professionalInfo.workHistory;
        user.jobTitle = _professionalInfo.jobTitle;
        user.x = _socialLinks.x;
        user.instagram = _socialLinks.instagram;
        user.tiktok = _socialLinks.tiktok;
        user.youtube = _socialLinks.youtube;
        user.linkedin = _socialLinks.linkedin;
        user.info = _professionalInfo.info;
        user.skills = _professionalInfo.skills;
        user.imageURL = _professionalInfo.imageURL;
        user.exists = true;
        user.visibility = _visibility;
        addressToUsername[msg.sender] = _username;
        usernames[_username] = true;
    }

    function editUser(
        string memory _username,
        BasicInfo memory _basicInfo,
        ProfessionalInfo memory _professionalInfo,
        SocialLinks memory _socialLinks,
        Visibility memory _visibility
    ) public onlyExitUsername(_username) onlyUser(_username) {
        User storage user = users[_username];
        user.firstName = _basicInfo.firstName;
        user.lastName = _basicInfo.lastName;
        user.email = _basicInfo.email;
        user.homeAddress = _basicInfo.homeAddress;
        user.dateOfBirth = _basicInfo.dateOfBirth;
        user.phoneNumber = _basicInfo.phoneNumber;
        user.education = _professionalInfo.education;
        user.workHistory = _professionalInfo.workHistory;
        user.jobTitle = _professionalInfo.jobTitle;
        user.x = _socialLinks.x;
        user.instagram = _socialLinks.instagram;
        user.tiktok = _socialLinks.tiktok;
        user.youtube = _socialLinks.youtube;
        user.linkedin = _socialLinks.linkedin;
        user.info = _professionalInfo.info;
        user.skills = _professionalInfo.skills;
        user.imageURL = _professionalInfo.imageURL;
        user.visibility = _visibility;
    }

    function getUserByUsername(
        string memory _username
    )
        public
        view
        onlyExitUsername(_username)
        returns (
            BasicInfo memory basicInfo,
            ProfessionalInfo memory professionalInfo,
            SocialLinks memory socialLinks,
            Visibility memory visibility
        )
    {
        User storage user = users[_username];
        basicInfo = BasicInfo(
            user.firstName,
            user.lastName,
            user.email,
            user.homeAddress,
            user.dateOfBirth,
            user.phoneNumber
        );

        professionalInfo = ProfessionalInfo(
            user.education,
            user.workHistory,
            user.jobTitle,
            user.info,
            user.skills,
            user.imageURL
        );

        socialLinks = SocialLinks(
            user.x,
            user.instagram,
            user.tiktok,
            user.youtube,
            user.linkedin
        );

        visibility = user.visibility;
        return (basicInfo, professionalInfo, socialLinks, visibility);
    }

    function getUsernameByAddress(
        address _addr
    ) public view returns (string memory) {
        return addressToUsername[_addr];
    }

    function getUserByAddress(
        address _addr
    )
        public
        view
        returns (
            BasicInfo memory basicInfo,
            ProfessionalInfo memory professionalInfo,
            SocialLinks memory socialLinks,
            Visibility memory visibility
        )
    {
        string memory username = addressToUsername[_addr];
        return getUserByUsername(username);
    }

    function setVisibility(
        string memory _username,
        bool education,
        bool workHistory,
        bool phoneNumber,
        bool homeAddress,
        bool dateOfBirth
    ) public onlyExitUsername(_username) onlyUser(_username) {
        User storage user = users[_username];
        user.visibility.education = education;
        user.visibility.workHistory = workHistory;
        user.visibility.phoneNumber = phoneNumber;
        user.visibility.homeAddress = homeAddress;
        user.visibility.dateOfBirth = dateOfBirth;
    }

    function getVisibility(
        string memory _username
    ) public view onlyExitUsername(_username) returns (Visibility memory) {
        User storage user = users[_username];
        return user.visibility;
    }
}
