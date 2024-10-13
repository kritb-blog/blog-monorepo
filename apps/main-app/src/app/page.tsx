import { DotPattern, TypingAnimation } from '@kritb-blog/design-system'

export default function Index() {
  return (
    <main className="p-8">
      <section className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Krit Bannachaisirisuk</h1>
        <TypingAnimation text="A senior software engineer" duration={100} /> with a passion for building products that
        make a difference. I specialize in full-stack development, with a focus on front-end technologies.
      </section>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
      />
    </main>
  )
}
