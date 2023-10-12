/**
 * function to get all assessments data from the database
 * @returns {object} - Response from the API endpoint.
 * @memberof getAssessments
 * @example getAssessments();
 * */
export const getAllAssessments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Assessments data");
    }, 3000);
  })
};

/**
 * function to generateBasicAssessment data from the database
 * @returns {object} - Response from the API endpoint.
 * @memberof generateBasicAssessment
 * @example generateBasicAssessment();
 * */
export const generateBasicAssessment = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Basic Assessment data");
    }, 3000);
  })
};

/** function to generateAdvancedAssessment data from the database
 * @returns {object} - Response from the API endpoint.
 * @memberof generateAdvancedAssessment
 * @example generateAdvancedAssessment();
 * */
export const generateAdvancedAssessment = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Advanced Assessment data");
    }, 3000);
  })
}

/** 
 * function to call section explanation feedback data from the database
 * @returns {object} - Response from the API endpoint.
 * @memberof getSectionExplanationFeedback
 * @example getSectionExplanationFeedback();
 */
export const getSectionExplanationFeedback = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Section Explanation Feedback data");
    }, 3000);
  })
}