using System.Collections.Generic;

namespace LearnJS.HeroManagement.ReadModel
{
    public interface IHeroDao
    {
        IEnumerable<Hero> GetHeroes();
    }
}
