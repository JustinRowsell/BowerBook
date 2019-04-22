using System.Collections.Generic;
using Amazon.DynamoDBv2;
using BowerBookAPI.Interfaces.Services;
using BowerBookAPI.Models.Core;

namespace BowerBookAPI.Services {
  public class InterestDataService: IInterestDataService
  {
        public List<InterestModel> GetAllInterests() {
            return null;
        }

        public InterestModel GetInterest(int id)
        {
            throw new System.NotImplementedException();
        }
  }
}
