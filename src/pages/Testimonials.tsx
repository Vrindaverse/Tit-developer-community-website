import { motion } from "framer-motion";

const testimonials = [
  {
    name: 'Sarthak Kumar',
    enrollNumber: '0191CS231234',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Sarthak Kumar Mahto.jpg', // Replace with actual path
    description: 'Sarthak has been an outstanding member of the community, always helping juniors with their web development skills. His dedication and leadership have left a lasting impact.',
  },
  {
    name: 'Mohd Meraaz',
    enrollNumber: '0191AL221090',
    courses: 'Cyber, Android',
    photoLink: '/src/assets/testimonials/Mohd Meraaz.jpg', // Replace with actual path
    description: 'Meraaz is a brilliant coder with expertise in Cybersecurity and Android Development. His problem-solving skills and ability to think critically have inspired many peers.',
  },
  {
    name: 'Siddharth Kumar',
    enrollnumber: '0192CS231193',
    courses: 'Android',
    photoLink: '/src/assets/testimonials/Siddharth Kumar.jpg', // Replace with actual path
    description: 'Siddharth’s passion for Android development has always been evident. His contributions to the community’s growth have been invaluable, particularly his work on mobile apps for the college.',
  },
  {
    name: 'Aryan Sharma',
    enrollNumber: '0192CS221051',
    courses: 'Cyber, Android',
    photoLink: '/src/assets/testimonials/Aryan.jpg', // Replace with actual path
    description: 'Aryan has shown exceptional leadership skills, especially in organizing hackathons. His ability to inspire and motivate others is truly remarkable.',
  },
  {
    name: 'Nikhil Kumar Gupta',
    enrollNumber: '0191CS231171',
    courses: 'ML, Cyber',
    photoLink: '/src/assets/testimonials/Nikhil Kumar gupta.jpg', // Replace with actual path
    description: 'Nikhil’s expertise in Machine Learning and Cybersecurity has contributed greatly to the advancement of several college projects. He’s always ready to lend a hand to others.',
  },
  {
    name: 'Rishabh Raj',
    enrollNumber: '0111IT231100',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Rishabh Raj.jpg', // Replace with actual path
    description: 'Rishabh’s contributions to web development projects have been pivotal in creating interactive and scalable solutions for the community. His attention to detail is remarkable.',
  },
  {
    name: 'Naman Kumar',
    enrollNumber: '0191CS221137',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Naman Kumar.jpg', // Replace with actual path
    description: 'Naman is a great web developer, always eager to learn new technologies. His projects have been a huge asset to the team, especially his UI/UX designs.',
  },
  {
    name: 'Rohit Tiwari',
    enrollNumber: '0111CD231111',
    courses: 'ML, Web Dev',
    photoLink: '/src/assets/testimonials/Rohit Tiwari.jpg', // Replace with actual path
    description: 'Rohit’s passion for both Machine Learning and Web Development has allowed him to contribute extensively to various community projects, bringing innovative solutions to the table.',
  },
  {
    name: 'Om Prakash Mehta',
    enrollNumber: '0191CS231177',
    courses: 'Cyber',
    photoLink: '/src/assets/testimonials/Om Prakash.png', // Replace with actual path
    description: 'Om Prakash’s work in cybersecurity has played a critical role in securing multiple community projects. His deep understanding of cyber threats has helped safeguard the team’s work.',
  },
  {
    name: 'Shashank Kumar',
    enrollNumber: '0111AL231244',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Shashank Agrawal.jpg', // Replace with actual path
    description: 'Shashank is an exceptional web developer whose projects always push the boundaries of innovation. His technical expertise has been crucial in designing responsive, dynamic websites.',
  },
  {
    name: 'Anikesh Sharma',
    enrollNumber: '0191CS231044',
    courses: 'ML',
    photoLink: '/src/assets/testimonials/Anikesh Sharma.png', // Replace with actual path
    description: 'Anikesh’s focus on Machine Learning and AI has led him to create intelligent systems that have enhanced the productivity of several community initiatives.',
  },
  {
    name: 'Sheetal Kawadkar',
    enrollNumber: '0191AL221162',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Sheetal Kawadkar.jpg', // Replace with actual path
    description: 'Sheetal’s expertise in web development has contributed significantly to the community’s web presence. She is known for her clean code and eye-catching UI designs.',
  },
  {
    name: 'Dipu Kumar',
    enrollNumber: '0191CS231111',
    courses: 'Cyber, Android',
    photoLink: '/src/assets/testimonials/Dipu Kumar.png', // Replace with actual path
    description: 'Dipu has always been an asset to the team with his expertise in both Cybersecurity and Android Development. He has worked on multiple projects that have helped students improve their technical skills.',
  },
  {
    name: 'Shaloni Mishra',
    enrollNumber: '0191AL221160',
    courses: 'ML, Web Dev',
    photoLink: '/src/assets/testimonials/shaloni mishra.jpg', // Replace with actual path
    description: 'Shaloni’s dual expertise in Machine Learning and Web Development has enabled her to create advanced systems and web applications for the community. Her problem-solving approach is commendable.',
  },
  {
    name: 'Aditi Gupta',
    enrollNumber: '0192CS221010',
    courses: 'Cyber, Android',
    photoLink: '/src/assets/testimonials/Aditi Gupta.jpg', // Replace with actual path
    description: 'Aditi is a proficient Android and Cybersecurity developer who has worked on several high-impact community projects. Her commitment to excellence is truly inspiring.',
  },
  {
    name: 'Neetesh Chaurasia',
    enrollNumber: '0111IA231075',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Neetesh Chaurasia.jpg', // Replace with actual path
    description: 'Neetesh’s web development skills are highly respected within the community. He has always been eager to take on new challenges and consistently delivers high-quality work.',
  },
  {
    name: 'Prince Kumar',
    enrollNumber: '0191CS231198',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Prince Singh.jpg', // Replace with actual path
    description: 'Prince is a dedicated web developer who has worked on multiple front-end and back-end projects. His skills in full-stack development have been instrumental in building robust community websites.',
  },
  {
    name: 'Shivam Kumar Tiwari',
    enrollNumber: '0111CD231132',
    courses: 'ML, Web Dev, Cyber',
    photoLink: '/src/assets/testimonials/SHIVAM Tiwari.jpg', // Replace with actual path
    description: 'Shivam is an all-rounder, excelling in Machine Learning, Web Development, and Cybersecurity. His versatility makes him an invaluable member of the community.',
  },
  {
    name: 'Harshit Anandd',
    enrollNumber: '0191CS221090',
    courses: 'Web Dev, Cyber, Android',
    photoLink: '/src/assets/testimonials/Harshit Anandd.jpg', // Replace with actual path
    description: 'Harshit’s broad skill set, spanning across Web Development, Cybersecurity, and Android, has enabled him to contribute to various domains. His cross-functional knowledge has benefitted many projects.',
  },
  {
    name: 'Akash Kumar',
    enrollNumber: '0191CS231029',
    courses: 'Cyber',
    photoLink: '/src/assets/testimonials/Akash Kumar.jpeg', // Replace with actual path
    description: 'Akash has shown remarkable skills in the cybersecurity domain, ensuring the safety and security of the community’s digital projects. His keen eye for security vulnerabilities has been a great asset.',
  },
  {
    name: 'Ananya Gupta',
    enrollNumber: '0191AL221019',
    courses: 'Web Dev',
    photoLink: '/src/assets/testimonials/Ananya Gupta.jpg', // Replace with actual path
    description: 'Ananya is a talented web developer who has been key to creating smooth, user-friendly interfaces. Her creative solutions and clean code have elevated many of our projects.',
  },
  {
    name: 'Yashraj Chouhan',
    enrollNumber: '0191AL221204',
    courses: 'Cyber',
    photoLink: '/src/assets/testimonials/Y A S H R A J.png', // Replace with actual path
    description: 'Yashraj’s contributions in cybersecurity have been invaluable to securing the community’s infrastructure. His dedication to learning and improving security protocols has been exceptional.',
  },
  {
    name: 'Sejal Tiwari',
    enrollNumber: '1091CS231241',
    courses: 'ML, Web Dev, Cyber, Android',
    photoLink: '/src/assets/testimonials/Sejal Tiwari.png', // Replace with actual path
    description: 'Sejal has been a multi-disciplinary contributor to the community, excelling in ML, Web Dev, Cybersecurity, and Android. Her well-rounded skills have made her a go-to person for diverse projects.',
  },
  {
    name: 'Aman Mishra',
    enrollNumber: '0191CS231034',
    courses: 'ML',
    photoLink: '/src/assets/testimonials/Aman Mishra (Chinu).jpg', // Replace with actual path
    description: 'Aman’s expertise in Machine Learning has allowed him to create groundbreaking algorithms. His contributions to AI projects have been transformative for the community.',
  },
  {
    name: 'Prakhar Shrivastava',
    enrollNumber: '0191CS231189',
    courses: 'ML, Web Dev, Cyber',
    photoLink: '/src/assets/testimonials/Icy_Bear.jpg', // Replace with actual path
    description: 'Prakhar has a strong background in Machine Learning, Web Development, and Cybersecurity. His ability to combine these areas has enabled him to work on innovative, cross-functional solutions.',
  },
  {
    name: 'Deepika Deshmukh',
    enrollNumber: '0192AL221028',
    courses: 'ML, Web Dev',
    photoLink: '/src/assets/testimonials/deepika_photo.jpg', // Replace with actual path
    description: 'Deepika’s work in both Machine Learning and Web Development has been vital in streamlining community processes. Her ability to merge these technologies has enhanced the user experience.',
  },
];

const AlumniTestimonials = () => {
  return (
    <div className="bg-[#020c1b] py-16 px-4">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white tracking-wider">
          Meet Our <span className="text-[#4a90e2]">Alumni</span>
        </h2>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
          Our alumni are driven by passion, hard work, and a deep enthusiasm for technology.  
          They have contributed to numerous projects, mentored juniors, and made an impact in  
          fields like **Web Development, Cybersecurity, and Android Development**. Their journey  
          continues to inspire the next generation of innovators.
        </p>
      </div>

      {/* Alumni Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((alumni, index) => (
          <motion.div
            key={index}
            className="bg-[#0d1b2a] text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <img
              src={alumni.photoLink}
              alt={alumni.name}
              className="w-61 h-61  mx-14 rounded-xl border-4 border-blue-400 shadow-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2 tracking-wide">{alumni.name}</h3>
              <p className="text-sm text-gray-400 mb-2 tracking-tight">
                Enrollment No: {alumni.enrollNumber}
              </p>
              <p className="text-sm text-[#4a90e2] font-medium mb-4">
                {alumni.courses}
              </p>
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {alumni.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlumniTestimonials;
