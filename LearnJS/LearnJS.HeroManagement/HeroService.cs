using LearnJS.HeroManagement.ReadModel;
using LearnJS.HeroManagement.ReadModel.Implementation;

namespace LearnJS.HeroManagement
{
    public class HeroService
    {
        private readonly string _nameOrConnectionString;

        public HeroService(string nameOrConnectionString="HeroManagement")
        {
            this._nameOrConnectionString = nameOrConnectionString;
        }

        public void CreateHero(HeroInfo heroInfo)
        {
            using (var context = new HeroDbContext(_nameOrConnectionString))
            {
                var hero = new Hero(heroInfo.Id, heroInfo.SerialNumber, heroInfo.Name, heroInfo.Power,
                    heroInfo.AlterEgo);

                context.Set<Hero>().Add(hero);

                context.SaveChanges();
            }
        }
    }
}
