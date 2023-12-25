// import React, { useEffect, useState } from 'react';
// import classnames from 'classnames';
// import {stats} from '../constants'
// import styles from '../styles'

// const Stats = () => 
//    (
//     <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      
// {      stats.map((stat)=>(
//         <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
//           <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white  ">
//             {stat.value}</h4>
//           <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3  ">
//             {stat.title}</p>
//         </div>
// ))
// }      
//     </section>
//   )


// export default Stats

// import React, { useEffect, useState } from 'react';
// import classnames from 'classnames';
// import { stats } from '../constants';
// import styles from '../styles';

// const Stats = () => {
//   const AnimatedStat = ({ value, title }) => {
//     const [animatedValue, setAnimatedValue] = useState(0);

//     useEffect(() => {
//       let currentValue = 0;

//       const interval = setInterval(() => {
//         currentValue += Math.ceil((value - currentValue) / 10); // Adjust the divisor for desired speed
//         setAnimatedValue(currentValue);

//         if (currentValue >= value) {
//           clearInterval(interval);
//         }
//       }, 50); // Adjust the interval duration as needed

//       return () => clearInterval(interval);
//     }, [value]);

//     return (
//       <div className="flex-1 flex justify-start items-center flex-row m-3">
//         <h4 className={classnames(
//           "font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white",
//           styles.animatedText // Add a class for styling the animation
//         )}>
//           {animatedValue}
//         </h4>
//         <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
//           {title}
//         </p>
//       </div>
//     );
//   };

//   return (
//     <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
//       {stats.map((stat) => (
//         <AnimatedStat key={stat.id} value={stat.value} title={stat.title} />
//       ))}
//     </section>
//   );
// };

// export default Stats;

// import React, { useEffect, useState } from 'react';
// import classnames from 'classnames';
// import { stats } from '../constants';
// import styles from '../styles';

// const Stats = () => {
//   const AnimatedStat = ({ value, title }) => {
//     const [animatedValue, setAnimatedValue] = useState(0);

//     // Extract numeric value from the string (remove special characters)
//     const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

//     useEffect(() => {
//       let currentValue = 0;

//       const interval = setInterval(() => {
//         currentValue += Math.ceil((numericValue - currentValue) / 10); // Adjust the divisor for desired speed
//         setAnimatedValue(currentValue);

//         if (currentValue >= numericValue) {
//           clearInterval(interval);
//         }
//       }, 50); // Adjust the interval duration as needed

//       return () => clearInterval(interval);
//     }, [numericValue]);

//     return (
//       <div className="flex-1 flex justify-start items-center flex-row m-3">
//         <h4 className={classnames(
//           "font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white",
//           styles.animatedText // Add a class for styling the animation
//         )}>
//           {animatedValue}
//         </h4>
//         <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
//           {title}
//         </p>
//       </div>
//     );
//   };

//   return (
//     <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
//       {stats.map((stat) => (
//         <AnimatedStat key={stat.id} value={stat.value} title={stat.title} />
//       ))}
//     </section>
//   );
// };

// export default Stats;

// import React, { useEffect, useState } from 'react';
// import classnames from 'classnames';
// import { stats } from '../constants';
// import styles from '../styles';

// const Stats = () => {
//   const AnimatedStat = ({ value, title }) => {
//     const [animatedValue, setAnimatedValue] = useState(0);

//     // Extract numeric value from the string (remove special characters)
//     const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

//     useEffect(() => {
//       let currentValue = 0;

//       const interval = setInterval(() => {
//         currentValue += Math.ceil((numericValue - currentValue) / 10); // Adjust the divisor for desired speed
//         setAnimatedValue(currentValue);

//         if (currentValue >= numericValue) {
//           clearInterval(interval);
//         }
//       }, 50); // Adjust the interval duration as needed

//       return () => clearInterval(interval);
//     }, [numericValue]);

//     return (
//       <div className="flex-1 flex justify-start items-center flex-row m-3">
//         <h4 className={classnames(
//           "font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white",
//           styles.animatedText // Add a class for styling the animation
//         )}>
//         {animatedValue}{value.replace(/\d+/g, '') /* Display special characters */}
//         </h4>
//         <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
//           {title}
//         </p>
//       </div>
//     );
//   };

//   return (
//     <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
//       {stats.map((stat) => (
//         <AnimatedStat key={stat.id} value={stat.value} title={stat.title} />
//       ))}
//     </section>
//   );
// };

// export default Stats;


import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { stats } from '../constants';
import styles from '../styles';

const Stats = () => {
  const AnimatedStat = ({ value, title }) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    // Extract numeric value from the string (remove non-numeric characters)
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

    // Extract special characters from both the start and the end
    const startSpecialChars = value.match(/^[^\d.]*/)[0] || '';
    const endSpecialChars = value.match(/[^\d.]*$/)[0] || '';

    useEffect(() => {
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += Math.ceil((numericValue - currentValue) / 14); // Adjust the divisor for desired speed
        setAnimatedValue(currentValue);

        if (currentValue >= numericValue) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval duration as needed

      return () => clearInterval(interval);
    }, [numericValue]);

    return (
      <div className="flex-1 flex justify-start items-center flex-row m-3">
        <h4 className={classnames(
          "font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white",
          styles.animatedText // Add a class for styling the animation
        )}>
          {startSpecialChars}{animatedValue}{endSpecialChars}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {title}
        </p>
      </div>
    );
  };

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <AnimatedStat key={stat.id} value={stat.value} title={stat.title} />
      ))}
    </section>
  );
};

export default Stats;
