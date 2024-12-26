import Card from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import { Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import type { FormSectionBaseProps } from './types'

type TagsSectionProps = FormSectionBaseProps

const defaultOptions = [
    { value: 'RedeSocial', label: 'RedeSocial' },
    { value: 'Indicação', label: 'Indicação' },
    { value: 'Passando', label: 'Passando' },
]

const TagsSection = ({ control }: TagsSectionProps) => {
    return (
        <Card>
            <h4 className="mb-2">Como conheceu a clinica?</h4>
            <div className="mt-6">
                <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                        <Select
                            isMulti
                            isClearable
                            placeholder="Add tags for customer..."
                            componentAs={CreatableSelect}
                            options={defaultOptions}
                            onChange={(option) => field.onChange(option)}
                        />
                    )}
                />
            </div>
        </Card>
    )
}

export default TagsSection
