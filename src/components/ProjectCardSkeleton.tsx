import { FC } from "react";

const ProjectCardSkeleton: FC = () => {
  return (
    <div className="flex flex-col h-full w-full bg-secondary p-4 rounded-md border border-primary/30">
      <div className="min-w-full bg-primary/10 animate-pulse placeholder h-full" />
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 justify-center mt-2">
          <p className="bg-primary/10 text-transparent w-fit">Lorem ipsum.</p>
          <p className="font-thin animate-pulse bg-primary/10 text-transparent w-fit">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex text-xs gap-1 mt-2 items-center">
              <span className="bg-primary/10 text-transparent">Demo</span>
              <span className="bg-primary/10 text-transparent">Code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
