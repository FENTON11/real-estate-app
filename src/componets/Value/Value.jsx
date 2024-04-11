import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  const [expandedItems, setExpandedItems] = useState(data.map(() => false));

  const handleAccordionChange = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth v-wrapper v-container'>
        {/* left side */}
        <div className='v-left v-wrapper'>
          <div className='image-container'>
            <img src='./value.png' alt='home' />
          </div>
        </div>
        {/* right side */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give to You</span>
          <span className='secondaryText'>
            We are always ready to help you by providing the best services to you.
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]} // using uuid to display
            onChange={handleAccordionChange}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${expandedItems[i] ? 'expanded' : 'collapsed'}`}
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter accordionButton'>
                    <AccordionItemState>
                      {({ expanded }) => (expanded ? 'expanded' : 'collapsed')}
                    </AccordionItemState>
                    <div className='flexCenter icon'>{item.icon}</div>
                    <span className='primaryText'>{item.heading}</span>
                    <div className='flexCenter icon'>
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className='secondaryText'>{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
