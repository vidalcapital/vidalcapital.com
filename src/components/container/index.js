import React from 'react';
import styles from './styles.module.css';

export default function Container(props) {

	const component = 'container';

	const {
		componentClass,
		size='default',
		spacingTop='default',
		spacingBottom='default',
		bgColor='none',
		children,
	} = props;

	/*return (
		<>
			{children &&
				<div className={`
					style.${component}
					style.${component}__spacing-top--${spacingTop}
					style.${component}__spacing-bottom--${spacingBottom}
					style.${component}__bg-color--${bgColor}
					style.${component}__${componentClass}
				`}>
					<div className={`
						style.${component}__inner
						style.${component}__inner-size--${size}
					`}>
				 		{children}
					</div>
				</div>
			}
		</>
	);*/

  
	return (
		<>
			{children &&
				<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
					<div className={`
						style.${component}__inner
						style.${component}__inner-size--${size}
					`}>
				 		{children}
					</div>
				</div>
			}
		</>
	);
}
