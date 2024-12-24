/* eslint-disable react/prop-types */
import PortfolioCard from '../components/PortfolioCard';
import p1 from '/profile1.jpg'
import p2 from '/profile2.jpg'
import p3 from '/profile3.jpg'
import p4 from '/profile4.jpg'
import p5 from '/profile4.jpg'
const Project = ({ search }) => {

    const projects = [
        {
            title: 'AI-Powered Education Tools',
            description: 'Exploring the integration of artificial intelligence to enhance modern education systems.',
            language: 'English',
            author: 'John Doe',
            image: p1
        },
        {
            title: 'Renewable Energy Innovations',
            description: 'A deep dive into sustainable technologies and renewable energy solutions.',
            language: 'French',
            author: 'Marie Curie',
            image: p2
        },
        {
            title: 'Cultural Heritage Preservation',
            description: 'Strategies and technologies to preserve ancient cultural landmarks.',
            language: 'Japanese',
            author: 'Hiroshi Tanaka',
            image: p3
        },
        {
            title: 'Mental Health Awareness',
            description: 'Promoting understanding and reducing stigma around mental health issues.',
            language: 'Spanish',
            author: 'Sofia Gonzalez',
            image: p4
        },
        {
            title: 'Climate Change and Its Impacts',
            description: 'An analysis of global climate change and its effects on ecosystems.',
            language: 'German',
            author: 'Hans Müller',
            image: p5
        },
    ];

    const filteredProjects = projects.filter(
        (project) => {
            return project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.description.toLowerCase().includes(search.toLowerCase()) ||
                project.language.toLowerCase().includes(search.toLowerCase()) ||
                project.author.toLowerCase().includes(search.toLowerCase())
        }
    );

    return (<div className="flex flex-col overflow-y-auto h-[440px] space-y-3">
        {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => <PortfolioCard key={idx} {...project} />)
        ) : (
            <p className="text-center text-gray-500">No projects found</p>
        )}
    </div>)
};

export default Project;
