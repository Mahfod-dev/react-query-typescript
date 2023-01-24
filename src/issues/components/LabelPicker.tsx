import { LoadingIcon } from '../../shared/LoadingIcon';
import { useLabels } from '../hooks/useLabels';

type LabelPickerProps = {
	selectedLabels: string[];
	onChange: (labelName: string) => void;
};

export const LabelPicker = ({ selectedLabels, onChange }: LabelPickerProps) => {
	const labelsQuery = useLabels();

	if (labelsQuery.isLoading) return <LoadingIcon />;

	return (
		<>
			{labelsQuery.data?.map((label) => (
				<span
					key={label.id}
					className={`badge rounded-pill m-1 label-picker ${
						selectedLabels.includes(label.name) ? 'active' : ''
					}`}
					style={{
						border: `1px solid #${label.color}`,
						color: `#${label.color}`,
					}}
					onChange={() => onChange(label.name)}>
					{label.name}
				</span>
			))}
		</>
	);
};
