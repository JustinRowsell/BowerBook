namespace BowerBookAPI.Utils {
  public static class DynamoRequestBuilder {
    public Dictionary<string, AttributeValue> QueryTableByUser(string tableName, string idField, string userId) {
      return new QueryRequest
      {
        TableName = "Interests",
        KeyConditionExpression = "Id = :Id",
        ExpressionAttributeValues = new Dictionary<string, AttributeValue> {
          {":Id", new AttributeValue { UserId =  userId }}}
      };
    }

    public Dictionary<string, AttributeValue> QueryTable(string tableName, string idField) {
      return new QueryRequest
      {
        TableName = "Interests",
        KeyConditionExpression = "Id = :Id"
      };
    }
  }
}
