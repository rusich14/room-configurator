module BP3D.Items {
  /** Meta data for items. */
  export interface Metadata {
    /** Name of the item. */
    itemName?: string;

    /** Type of the item. */
    itemType?: number;
    
    /** Url of the model. */
    modelUrl?: string;

    /** Code of the model. */
    modelCode?: string;

    /** Resizeable or not */
    resizable?: boolean;
  }
}
