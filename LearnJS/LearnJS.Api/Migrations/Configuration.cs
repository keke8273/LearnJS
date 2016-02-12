using System.Collections.Generic;
using LearnJS.HeroManagement.ReadModel;

namespace LearnJS.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<LearnJS.HeroManagement.ReadModel.Implementation.HeroDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(LearnJS.HeroManagement.ReadModel.Implementation.HeroDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            var heroes = new List<Hero>
            {
                new Hero
                {
                    Id = Guid.NewGuid(),
                    Name = "Dr Awrsome",
                    Power = "Super Cool",
                    SerialNumber = 1,
                    AlterEgo = "Be cool",
                },
                new Hero
                {
                    Id = Guid.NewGuid(),
                    Name = "Nissa",
                    Power = "Awaken Lands",
                    SerialNumber = 2,
                    AlterEgo = "Defeat Eldrazi"
                }
            };

            heroes.ForEach(s => context.Heroes.AddOrUpdate(p => p.Name, s));

            context.SaveChanges();
        }
    }
}
