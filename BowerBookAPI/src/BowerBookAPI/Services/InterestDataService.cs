using System.Collections.Generic;
using Amazon.DynamoDBv2;
using BowerBookAPI.Interfaces.Services;
using BowerBookAPI.Models;
using BowerBookAPI.Utils;

namespace BowerBookAPI.Services {
  public class InterestDataService: IInterestDataService
  {
    private AmazonDynamoDBClient _client = null;
    public AmazonDynamoDBClient DynamoDbClient {
      get {
        if (_client == null)
          _client = new AmazonDynamoDBClient();
        return _client;
      }
    }

    public List<InterestModel> GetAllInterests() {
      var request = DynamoRequestBuilder.QueryTable("Interests", "Id");
      var res = _client.Query(request);
      foreach (Dictionary<string, AttributeValue> item in res.Items)
      {
        // Process the result.
        return item;
      }
      return null;
    }

    public void GetInterestsForUser(int userId) {


      var response = _client.Query(request);
      foreach (Dictionary<string, AttributeValue> item in response.Items)
      {
        // Process the result.
        PrintItem(item);
      }
    }
  }
}
