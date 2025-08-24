import { contract } from ".";

// Function to parse error messages
function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}

export async function getUsernameByAddress(addr) {
  try {
    const contractObj = await contract();
    const username = await contractObj.getUsernameByAddress(addr);
    return username;
  } catch (error) {
    console.error("Error in getUsernameByAddr:", error);
    return parseErrorMsg(error);
  }
}

export async function createUser(
  username,
  bascInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.createUser(
      username,
      bascInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (error) {
    console.error("Error in createUser:", error);
    return parseErrorMsg(error);
  }
}

export async function editUser(
  username,
  bascInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.createUser(
      username,
      bascInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (error) {
    console.error("Error in createUser:", error);
    return parseErrorMsg(error);
  }
}

export async function getUserByUsername(username) {
  try {
    const contractObj = await contract();
    const user = await contractObj.getUserByUsername(username);
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (error) {
    console.error("Error in getUserByUsername:", error);
    return parseErrorMsg(error);
  }
}

export async function getUserByAddress(addr) {
  try {
    const contractObj = await contract();
    const user = await contractObj.getUserByAddress(addr);
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (error) {
    console.error("Error in getUserByUsername:", error);
    return parseErrorMsg(error);
  }
}

export async function getVisibility(username) {
  try {
    const contractObj = await contract();
    const visibility = await contractObj.getVisibility(username);
    return {
      education: visibility.education,
      workHistory: visibility.workHistory,
      phoneNumber: visibility.phoneNumber,
      homeAddress: visibility.homeAddress,
      dateOfBirth: visibility.dateOfBirth,
    };
  } catch (error) {
    console.error("Error in getVisibility:", error);
    return parseErrorMsg(error);
  }
}

export async function setVisibility(
  username,
  education,
  workHistory,
  phoneNumber,
  homeAddress,
  dateOfBirth
) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.setVisibility(
      username,
      education,
      workHistory,
      phoneNumber,
      homeAddress,
      dateOfBirth
    );
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (error) {
    console.error("Error in setVisibility:", error);
    return parseErrorMsg(error);
  }
}
