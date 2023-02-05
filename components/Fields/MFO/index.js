import React from 'react';

import TargetField from './TargetField';
import BaseInputField from './BaseInputField';
import RateField from './RateField';
import ActualField from './ActualField';
import QETAComponent from '../QETA';
import uniqid from 'uniqid';
import { 
    Input, 
    InputGroup, 
    InputGroupText, 
} from 'reactstrap';

const MFO = (props) => {
    const {
        id,
        field,
        index,
        mfoData = {
            other: {},
            rate: null,
            target: null,
            actual: null,
            percentage: null,
            "dep-total": null,
            total: 0,
        }, // Form's previous data
        onChange,
        percentage,
        editMode = true,
    } = props;

    const initialTotal = mfoData?.total;
    const initialOther = mfoData?.other;
    const initialData = {
        rate: null,
        target: null,
        actual: null,
        percentage: null,
        "dep-total": null,
    };

    const [data, setData] = React.useState(initialData);

    const [other, setOther] = React.useState(initialOther);
    const [total, setTotal] = React.useState(initialTotal);

    const [_id, _setId] = React.useState(id);

    const payload = React.useMemo(() => ({
        id: _id,
        data: { ...data },
        other: { ...other },
        total,
    }), [_id, data, other, total]);

    const isIncentiveTotal = percentage?.type === 'Incentives';

    const handleChange = (type, _for) => (value) => {
        if (_for === 'other') {
            setOther(other => ({
                ...other,
                [type]: value,
            }));
        } else {
            setData(data => ({
                ...data,
                [type]: value
            }));
        }
	}

    const handleQetaValue = (qetaType) => {
        const value = field.for === qetaType 
            ? data?.rate 
            : other?.[qetaType];

        return value;
    }

    const onlyOneDependencyField = (fields) => {
		if (!fields || !fields?.length) return true;
		const isTrue = fields?.some?.(field => field?.for?.length);

		if (!isTrue) {
			console.warn('Found more than 1 dependency field');
		}

		return isTrue;
	}

    React.useEffect(() => {
        if (initialData !== data && total !== initialTotal && other !== initialOther) {
            onChange?.({ ...payload });
        }
    }, [data, total, other, payload]);

    return(
        <div>
            <div className='mfo-form-content-box'>
                <div style={{ width: '300px '}}>
                    <small className='m-0 p-0'>{field.title}</small>
                    {field?.subtitle && <small className='text-red display-block'>{ field?.subtitle }</small>}
                </div>
                <div style={{ width: '400px '}} className="d-flex flex-column justify-content-around">
                    {onlyOneDependencyField(field.other_fields) && field.other_fields?.map?.((other_field, otherIndex) => {
                        const type = other_field?.for === "Target" ? "dep-total" : other_field.key;
                        const isOtherType = type !== "dep-total";
                        
                        return (
                            <BaseInputField
                                disabled={!editMode}
                                id={`MFO-FIELD-BASE-${index}${otherIndex}`}
                                key={`MFO-FIELD-BASE-${index}${otherIndex}`}
                                DOMValues={other_field?.dom?.value?.contents?.[other_field?.key]?.values}
                                onChange={handleChange(type, isOtherType && "other")}
                                value={isOtherType ? other[other_field.key] : data['dep-total']}
                                placeHolder={other_field.title}
                            />
                        )
                    })}
                    <TargetField 
                        disabled={!editMode}
                        id={`MFO-FIELD-TARGET-${index}`}
                        DOMValues={field?.dom?.value?.contents?.[field?.for]?.values} 
                        dependencyTotalNumber={data["dep-total"]}
                        value={data.target} 
                        onDepTotalChange={handleChange("percentage")}
                        onChange={handleChange('target')}
                    />
                    <ActualField 
                        disabled={!editMode}
                        id={`MFO-FIELD-ACTUAL-${index}`}
                        DOMValues={field?.dom?.value?.contents?.[field?.for]?.values} 
                        value={data.actual} 
                        onChange={handleChange('actual')}	
                    />
                    <RateField 
                        id={`MFO-FIELD-RATE-${index}`}
                        target={data.percentage ?? data.target} 
                        actual={data.actual}
                        onChange={handleChange('rate')}
                    />
                    <QETAComponent
                        quality={handleQetaValue('Quality')}
                        efficiency={handleQetaValue('Efficiency')}
                        timeliness={handleQetaValue('Timeliness')}
                        onAverageChange={setTotal}
                    />
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Total With {isIncentiveTotal ? "Incentives" : "Incorporated Percentage"}: 
                        </InputGroupText>
								
                        <Input 
                            disabled
                            value={percentage?.applyPercentage?.(total)}
                            onChange={null}
                        />
                    </InputGroup>
                    <br/>
                </div>
                <div className='display-flex flex-column grow-2' style={{ width: '300px '}}>
                    {/* DOM */}
                    {Object.keys(field?.dom?.value?.contents || {}).map((key, domIndex) => (
                        <div key={`DOM-${index}${domIndex}`}>
                            <h5>{field?.dom?.value?.contents[key].label}</h5>
                            {field?.dom?.value?.contents[key].values.map((dom, valueIndex) => (
                                <h5 key={valueIndex+dom.label}>{dom.label} = {parseFloat(dom.value).toFixed(2)}</h5>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MFO;