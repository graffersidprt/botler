import { statementSuggestionMockData } from "../mockData/mockData";

/**
 * function to get statement suggestions from the database based on the statement provided by the user 
 * @param {string} statement - statement provided by the user
 * @returns {object} - Response from the API endpoint.
 * @memberof getStatementSuggestions
 * @example getStatementSuggestions(statement);
 */

export const getStatementSuggestions = async (statement: String) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(statementSuggestionMockData);
        }, 3000);
      });
}

/** function to delete statement from the database based on the statementId provided by the user
 * @param {string} statementId - statement provided by the user
 * @returns {object} - Response from the API endpoint.
 * @memberof deleteStatement
 * @example deleteStatement(statementId);
 * 
 * */

export const deleteStatement = async (statementId: String) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(statementSuggestionMockData);
        }, 3000);
      });
}