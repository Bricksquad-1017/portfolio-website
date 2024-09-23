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

        /// <summary>
        /// Retrieves a list of sample projects.
        /// </summary>
        /// <returns>A list of <see cref="Project"/> objects representing sample projects.</returns>
        public static List<Project> GetSampleProjects() => new List<Project>
        {
            new Project("Project One", "Description for project one", "https://example.com/project-one"),
            new Project("Project Two", "Description for project two", "https://example.com/project-two"),
            new Project("Project Three", "Description for project three", "https://example.com/project-three")
        };
    }
}