import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { audiovisualCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 17 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(17);
    });

    it('audiovisualCategory should be defined', () => {
      expect(audiovisualCategory).toBeDefined();
      expect(audiovisualCategory.i18n).toBeDefined();
    });
  });
});
