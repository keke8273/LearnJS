using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearnJS.HeroManagement.ReadModel
{
    public class Hero
    {
        public Hero(Guid id, int serialNumber, string name, string power, string alterEgo) : this()
        {
            Id = id;
            SerialNumber = serialNumber;
            Name = name;
            Power = power;
            AlterEgo = alterEgo;
        }

        public Hero()
        {
        }

        public Guid Id { get; set; }
        public int SerialNumber { get; set; }
        public string Name { get; set; }
        public string Power { get; set; }
        public string AlterEgo { get; set; }
    }
}
