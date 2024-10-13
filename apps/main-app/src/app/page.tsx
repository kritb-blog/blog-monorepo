import { TypingAnimation } from '@kritb-blog/design-system'

export default function Index() {
  return (
    <main className="p-4">
      <section className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Krit Bannachaisirisuk</h1>
        <TypingAnimation text="A senior software engineer" duration={100} />
        <div className="flex flex-col items-center gap-4">
          <p className="leading-relaxed max-w-screen-lg">
            {
              'With over a decade of expertise in full-stack development, I have a proven track record of designing and implementing scalable, high-performance web applications. My experience at prominent companies such as Agoda and ScreenCloud has honed my ability to architect robust front-end solutions using ReactJS and Redux, while seamlessly integrating backend services with technologies like NodeJS, C#, and .NET Core. In my leadership roles, I have successfully led teams through complex technical projects, upheld high standards of code quality, and managed both frontend and backend operations to ensure alignment with business objectives. My proficiency extends to a wide range of technologies, including Docker, AWS, and CI/CD pipelines, enabling me to deliver comprehensive, end-to-end software solutions.'
            }
          </p>
          <p className="leading-relaxed max-w-screen-lg">
            {
              "Beyond technical execution, I am deeply committed to mentoring junior engineers, enhancing recruitment processes, and optimizing development workflows. I have actively contributed to business and technical planning strategies to ensure the successful delivery of projects that support long-term organizational goals. My academic credentials, including a Master's degree in Computer Science and certifications such as Microsoft Specialist in HTML5, JavaScript, and CSS3, underscore my dedication to continuous professional development. With a focus on precision, efficiency, and innovation, I am driven to solve complex challenges and deliver impactful, high-quality digital solutions."
            }
          </p>
        </div>
      </section>
    </main>
  )
}
