import {CheckmarkContentProps} from '@/types';
import Checkmark from './icons/checkmark';

export default function CheckmarkContent({description}: CheckmarkContentProps) {
  return (
    <div className="flex w-full justify-start items-center gap-3">
      <Checkmark className="min-w-9" />
      <p className="text-style-body2 text-primary font-light">{description}</p>
    </div>
  );
}
