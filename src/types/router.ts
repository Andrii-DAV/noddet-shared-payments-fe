import { UIMatch } from '@remix-run/router/utils.ts';
interface Handle {
  label?: string;
}
export type Match = UIMatch<unknown, Handle>;
