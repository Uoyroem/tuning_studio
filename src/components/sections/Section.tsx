import React, {FC, PropsWithChildren} from 'react';
import './Section.scss'

type SectionProps = {
  additionalClass?: string;
};

const Section: FC<PropsWithChildren & SectionProps> = ({children, additionalClass = ''}) => {
  return (
    <section className={"section " + additionalClass}>
      {children}
    </section>
  );
};

export default Section;