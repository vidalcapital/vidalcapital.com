import React from 'react';

export default function Heading(props) {

	const component = 'heading';

	const {
		componentClass,
		title,
		subtitle,
		align='center',
		titleSize='default',
	} = props;

	return (
		<>
			{title &&
				<div className={`
					style.${component}
					style.${component}__${componentClass}
					style.${component}__align--${align}
				`}>
					{title &&
						<div className={`style.${component}__title style.${component}__title-size--${titleSize}`}>
							{title}
						</div>
					}
					{subtitle &&
						<div className={`style.${component}__subtitle`} dangerouslySetInnerHTML={{__html: subtitle}}></div>
					}
				</div>
			}
		</>
	);
}