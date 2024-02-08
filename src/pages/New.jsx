import { Link } from "react-router-dom";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CTA } from "../components";
import { naya, education, pubs } from "../constants";
import { arrow } from "../assets/icons";

const New = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Gaurav{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Salvi
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Information Systems grad with expertise in web development, data analysis, and ML. Proficient in Python, HTML/CSS, and data
science. Strong in data analysis, and visualization with tools like Power BI/Excel/Tableau. Knowledge of AI models and Database
management skills. Success in brand engagement and thinking through. Ready to apply tech skills in critical environments
      </p>
      <div className='py-16'>
        <h3 className='subhead-text'>Academic Background.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            A brief view of my academic journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>


      <hr className='border-slate-500' />


      <div className='py-16'>
        <h3 className='subhead-text'>Certifications</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            In the mean time, I dedicated my time towards learning different skills and gained various certifications:
          </p>
        </div>
      </div>

      <div className='flex flex-wrap my-10 gap-16'>
        {naya.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  View Certificate
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-500' />


      <div className='py-16'>
        <h3 className='subhead-text'>Publications.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Take a view at my Research Paper and Personal Blog:
          </p>
        </div>
      </div>
      
      <div className='flex flex-wrap my-20 gap-16'>
        {pubs.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  View
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default New;
