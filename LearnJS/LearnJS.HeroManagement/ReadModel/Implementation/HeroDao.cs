using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnJS.HeroManagement.ReadModel.Implementation
{
    public class HeroDao : IHeroDao
    {
        private readonly Func<HeroDbContext> _contextFactory;

        public HeroDao(Func<HeroDbContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }

        public IEnumerable<Hero> GetHeroes()
        {
            using (var context = _contextFactory.Invoke())
            {
                return context.Query<Hero>().ToList();
            }
        }
    }
}
