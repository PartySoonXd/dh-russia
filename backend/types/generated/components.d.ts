import type { Schema, Struct } from '@strapi/strapi';

export interface EntryDates extends Struct.ComponentSchema {
  collectionName: 'components_entry_dates';
  info: {
    displayName: 'Dates';
  };
  attributes: {
    condition: Schema.Attribute.Enumeration<
      [
        '\u0441\u043A\u043E\u0440\u043E',
        '\u0438\u0434\u0435\u0442',
        '\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D',
      ]
    > &
      Schema.Attribute.Required;
    endDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
    startDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'entry.dates': EntryDates;
    }
  }
}
