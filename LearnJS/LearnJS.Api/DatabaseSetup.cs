using System.Data.Entity;
using LearnJS.HeroManagement.ReadModel.Implementation;

namespace LearnJS.Api
{
    internal static class DatabaseSetup
    {
        public static void Initialize()
        {
            //prevent default EF database initializer from running.
            Database.SetInitializer<HeroDbContext>(null);
        }
    }
}