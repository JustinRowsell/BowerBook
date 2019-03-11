using System.Collections.Generic;
using BowerBookAPI.Models;

namespace BowerBookAPI.Interfaces.Services {
  public interface IInterestDataService
  {
    List<InterestModel> GetAllInterests();
  }
}
