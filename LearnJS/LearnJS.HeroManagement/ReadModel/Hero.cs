using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearnJS.HeroManagement.ReadModel
{
    public class Hero
    {
        public Guid Id { get; set; }

        public int SerialNumber { get; set; }

        public string Name { get; set; }

        public string Power { get; set; }

        public string AlterEgo { get; set; }
    }
}
