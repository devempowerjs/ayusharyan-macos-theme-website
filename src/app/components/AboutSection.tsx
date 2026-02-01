import { MacOSWindow } from './MacOSWindow';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-4xl w-full">
        <MacOSWindow title="About Me" showControls={true}>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              I am <span className="font-semibold text-foreground">Ayush Aryan</span>, a DevOps-focused professional with strong expertise in automation, cloud infrastructure, CI/CD pipelines, and system reliability. I work at the intersection of development and operations, transforming code into scalable and secure infrastructure.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              With hands-on experience in cloud tools, container orchestration, and monitoring systems, I continuously focus on efficiency, reliability, and automation-first workflows. My approach combines technical precision with a deep understanding of modern infrastructure challenges.
            </p>
          </div>
        </MacOSWindow>
      </div>
    </section>
  );
}
