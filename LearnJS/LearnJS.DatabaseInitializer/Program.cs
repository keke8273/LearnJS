using System.Configuration;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using LearnJS.HeroManagement.ReadModel.Implementation;

namespace LearnJS.DatabaseInitializer
{
    class Program
    {
        static void Main(string[] args)
        {
            var connectionString = ConfigurationManager.AppSettings["defaultConnection"];

            using (var context = new HeroDbContext(connectionString))
            {
                if (context.Database.Exists())
                    context.Database.Delete();

                context.Database.Create();
            }

            var contexts =
                new DbContext[]
                {
                };

            foreach (var context in contexts)
            {
                var adapter = (IObjectContextAdapter)context;

                var script = adapter.ObjectContext.CreateDatabaseScript();

                context.Database.ExecuteSqlCommand(script);

                context.Dispose();
            }

            //Seed Databases
            using (var context = new HeroDbContext(connectionString))
            {
                HeroDbContextInitializer.Seed(context);
            }
        }

    }
}
