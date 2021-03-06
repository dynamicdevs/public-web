import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode
};

const GridWrapper: FC<Props> = ({
  className,
  children,
}) => (
  <div className={className}>
    <div className="mx-auto w-[calc(100%-3rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-240px)]">
      <div className="dynamic-grid">
        {children}
      </div>
    </div>
  </div>
);

export default GridWrapper;
