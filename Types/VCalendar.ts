export interface AttributeConfig {
  key: string | number;
  content?: string | Partial<Content | Profile<Partial<Content>>>;
  highlight: boolean | string | Partial<Highlight | Profile<Partial<Highlight>>>;
  dot?: boolean | string | Partial<Dot | Profile<Partial<Dot>>>;
  bar?: boolean | string | Partial<Bar | Profile<Partial<Bar>>>;
  popover: PopoverConfig;
  dates: DateRangeSource[] | Date;
  customData?: any;
  order?: number;
}

interface Profile<T> {
  start: T;
  base: T;
  end: T;
  startEnd?: T;
}

interface Content {
  key: string | number;
  color: string;
  class: string | any[];
  style: Record<string, any>;
}

interface Highlight {
  key: string | number;
  color: string;
  class: string | any[];
  style: Record<string, any>;
  contentClass: string | any[];
  contentStyle: Record<string, any>;
  fillMode: 'solid' | 'light' | 'outline';
}

interface Dot {
  key: string | number;
  color: string;
  class: string | any[];
  style: Record<string, any>;
}

interface Bar {
  key: string | number;
  color: string;
  class: string | any[];
  style: Record<string, any>;
}

type PopoverConfig = Partial<{
  label: string;
  customData: any;
  visibility: 'click' | 'hover' | 'hover-focus' | 'focus';
  placement: string;
  hideIndicator: boolean;
  isInteractive: boolean;
}>;

type DateRangeSource = DateRangeDate | [DateRangeDate, DateRangeDate] | Partial<DateRangeConfig>;

type DateRangeDate = Date | null;

interface DateRangeConfig {
  start: DateRangeDate;
  end: DateRangeDate;
  span: number;
}
