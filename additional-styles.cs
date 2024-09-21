using System;
using System.Collections.Generic;

namespace PortfolioWebsite
{
    public class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }

        public Project(string title, string description, string url)
        {
            Title = title;
            Description = description;
            Url = url;
        }

        public static List<Project> GetSampleProjects()
        {
            return new List<Project>
            {
                new Project("Project One", "Description for project one", "http://example.com/project-one"),
                new Project("Project Two", "Description for project two", "http://example.com/project-two"),
                new Project("Project Three", "Description for project three", "http://example.com/project-three")
            };
        }
    }
}