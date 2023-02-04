import React from 'react';
import MFO from '../Fields/MFO';
import { Badge } from 'reactstrap';

const MFO1 = props => {
	return(
		<>	
			{props?.contents?.map?.((content, parentIndex) => (
				<div key={parentIndex}>
					<div>
						<h3 className='m-0 p-0'>
							{content.title}
							{content.percentage?.type === "Incorporated" && (
								<Badge color="info">
									{content.percentage?.cellIncorporated}
								</Badge>
							)}
						</h3>
						{content?.subtitle && <small className='text-red display-block'>{ content?.subtitle }</small>}
					</div>
					{content.fields.map((field, index) => 
						<MFO 
							key={`MFO-${parentIndex}${index}`} 
							index={`${parentIndex}${index}`} 
							percentage={content.percentage}
							field={field}
						/>)
					}
					<br/>
					<hr/>
				</div>
			))}
		</>
	);
}

export default MFO1;