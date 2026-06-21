import {Code2,Lightbulb,Rocket,Users} from "lucide-react";

const highlights=[
    {
        icon:Code2,
        title: "Clean Code",
        description:"Writing maintanable,scanable code that stands the test of time",

    },
     {
        icon:Rocket,
        title: "Performance",
        description:"Optimizing for speed and delivering lightning-fast user experiences",

    },
     {
        icon:Users,
        title: "Colaboration",
        description:"Working closely with teams to bring ideas to life",

    },
     {
        icon:Lightbulb,
        title: "Innovation",
        description:"Staying ahead with latest technologies and best practices",

    },
];
    export const About=()=>{
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items -center">
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        About Me
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                         one component at a time.
                    </span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                      I am a Computer Science student and aspiring Software Developer with a strong interest in Frontend Development, Artificial Intelligence, and Machine Learning. My technical foundation includes C++, Java, HTML, CSS, and Data Structures & Algorithms, and I enjoy solving problems while building efficient and user-friendly applications. I am continuously expanding my skill set by learning modern technologies and exploring innovative ways to apply them.  
                    </p>
                    <p>
                       My passion lies in creating engaging digital experiences that combine clean design with practical functionality. With experience in UI/UX Design and web development, I focus on building responsive and intuitive interfaces that enhance user interaction. I believe that great software should not only work efficiently but also provide a seamless experience for users.
                    </p>
                    <p>
                     Alongside web development, I am actively exploring AI and Machine Learning through Python, Scikit-learn, and PyTorch. My goal is to work at the intersection of intelligent systems and modern web technologies, developing solutions that are both impactful and accessible. I am a dedicated learner who enjoys taking on new challenges, improving my technical skills, and turning ideas into real-world projects.   
                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "I am actively exploring AI and Machine Learning through Python, Scikit-learn, and PyTorch. My goal is to work at the intersection of intelligent systems and modern web technologies, developing solutions that are both impactful and accessible".
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item,idx)=>(
                    <div
                    key={idx}
                    className="glass p-6 rounded-2xl animate-fade-in"
                    style={{animationDelay:`${(idx+1)*100}ms`}}
                    >
                        <div className="w-12 h-12 rounded-x1 bg-primary/10 flex items-center justify-center mb-4 hiver:ng-primary/20">
                            <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </section>
    );
};