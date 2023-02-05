import React from 'react';
import uniqid from 'uniqid';
import MFO from '../Fields/MFO';
import { Badge } from 'reactstrap';

const MFO1 = ({ mfoData, contents, editMode, onChange }) => {
	return(
		<>	
			{contents?.map?.((content, parentIndex) => (
				<div key={parentIndex}>
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
							<MFO 
								id={mfoData?.[index]?.id ?? uniqid()}
								key={`MFO-${parentIndex}${index}`} 
								index={`${parentIndex}${index}`} 
								percentage={content.percentage}
								field={field}
								mfoData={mfoData?.[index]}
								editMode={editMode}
								onChange={data => onChange?.(data)}
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

export default MFO1;