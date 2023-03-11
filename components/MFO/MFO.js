import React from 'react';
import MFOFieldGroup from '../Fields/MFOFieldGroup';
import { Badge } from 'reactstrap';

// MFO GROUP FORM
const MFO = (props) => {
	const { mfoData, type, editMode, onChange, formType } = props

	return(
		<>	
			{props?.[formType]?.map?.((content, parentIndex) => (
				<div key={`MFO-${parentIndex}`}>
					<div>
						<h3 className='m-0 p-0'>
							{content.title}
							{content.percentage?.type === "Incorporated" && (
								<Badge color="info">
									{`${content.percentage?.cellIncorporated}%`}
								</Badge>
							)}
						</h3>
						{content?.subtitle && <small className='text-red display-block'>{ content?.subtitle }</small>}
					</div>
					{content.fields.map((field, index) => {
						return( 
							<MFOFieldGroup 
								key={`${content.title}-${field.title}-${index}`} 
								type={type}
								index={`${content.title}-${field.title}-${index}`}
								percentage={content.percentage}
								field={field}
								mfoData={mfoData?.[`${content.title}-${field.title}-${index}`]}
								editMode={editMode}
								onChange={data => onChange?.({
									[`${content.title}-${field.title}-${index}`]: { ...data }
								})}
							/>
						)
					})}
					<br/>
					<hr/>
				</div>
			))}
		</>
	);
}

export default MFO;