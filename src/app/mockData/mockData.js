export const BotlerUserMockData = {
  "BotlerUserParameters" : {
    "_id": "1",
    "email": "john@gmail.com",
    "given_name": "John",
    "family_name": "Doe",
    "credit": 1,
    "account_type": "user",
    "properties":{
      "email_not_verified": true,
    }
  },
  "UserToken": {
    "token": "1234567890"
  }
}

export const BotlerUserMockDataWithVerifiedEmail = {
  "BotlerUserParameters" : {
    "_id": "1",
    "email": "john@gmail.com",
    "given_name": "John",
    "family_name": "Doe",
    "credit": 1,
    "account_type": "user",
    "properties":{}
  },
  "UserToken": {
    "token": "1234567890"
  }
}

export const statementSuggestionMockData = {
  "BotlerStatementSuggestion" : {
    "suggestion_id": "1",
    "suggestion": "Someone has been using a company logo without authorization and stealing profits.",
    "suggestion_type": "Statement Suggestion",
    "suggestion_detail_type": "First-person pronoun",
    "suggestion_description": "Botler currently does not support statements that contain first-person pronouns (e.g. I, me, my, mine, etc.). Please try again with a statement that does not contain first-person pronouns. Unsupported first-person pronouns:I Tip Rephrase your statement to remove the use of first-person pronouns, and use indefinite pronouns like someone instead.Replace all elements of the Statement that are prone to biased results with neutral, unidentifiable elements.",
  },
}
