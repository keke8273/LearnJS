using AutoMapper;
using LearnJS.Dto;
using LearnJS.HeroManagement;
using LearnJS.HeroManagement.ReadModel;

namespace LearnJS.Api
{
    public static class AutomapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile(new HeroManagementProfile());
            });
            
            Mapper.AssertConfigurationIsValid();
        }
    }

    public class HeroManagementProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<HeroDto, HeroInfo>().ForMember(hi => hi.Id, opt => opt.Ignore());
            Mapper.CreateMap<Hero, HeroDto>();
        }
    }
}