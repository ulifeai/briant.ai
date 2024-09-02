export type PageData = 
  | {
      name: string;
      layout: string;
      allowedRoles: string[];
      content: {
        type: string;
        id: string;
        content: string;
        size: string;
        color: string;
        fontStyle: string;
      }[];
    }
  | {
      name: string;
      layout: string;
      allowedRoles: string[];
      content: (
        | {
            type: string;
            id: string;
            label: string;
            placeholder: string;
            options?: undefined;
            onChange?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            options: { value: string; label: string }[];
            onChange: string;
            placeholder?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            onClick: string;
            placeholder?: undefined;
            options?: undefined;
            onChange?: undefined;
          }
      )[];
    }
  | {
      name: string;
      layout: string;
      allowedRoles: string[];
      content: (
        | {
            type: string;
            id: string;
            label: string;
            onClick: string;
            columns?: undefined;
            data?: undefined;
            onRowClick?: undefined;
          }
        | {
            type: string;
            id: string;
            columns: (
              | {
                  id: string;
                  label: string;
                  customActions?: undefined;
                }
              | {
                  id: string;
                  label: string;
                  customActions: { label: string; onClick: string }[];
                }
            )[];
            data: string;
            onRowClick: string;
            label?: undefined;
            onClick?: undefined;
          }
      )[];
    }
  | {
      name: string;
      layout: null;
      allowedRoles: string[];
      content: (
        | {
            type: string;
            id: string;
            label: string;
            placeholder: string;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            onClick: string;
            placeholder?: undefined;
          }
      )[];
    }
  | {
      name: string;
      layout: string;
      allowedRoles: string[];
      content: (
        | {
            type: string;
            id: string;
            content: string;
            size: string;
            label?: undefined;
            options?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            options: { value: string; label: string }[];
            content?: undefined;
            size?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            onClick: string;
            content?: undefined;
            size?: undefined;
            options?: undefined;
          }
      )[];
    }
  | {
      name: string;
      layout: string;
      allowedRoles: string[];
      content: (
        | {
            type: string;
            id: string;
            content: string;
            size: string;
            label?: undefined;
            options?: undefined;
            selectedDate?: undefined;
            placeholder?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            options: string;
            content?: undefined;
            size?: undefined;
            selectedDate?: undefined;
            placeholder?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            selectedDate: string;
            content?: undefined;
            size?: undefined;
            options?: undefined;
            placeholder?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            placeholder: string;
            content?: undefined;
            size?: undefined;
            options?: undefined;
            selectedDate?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            onClick: string;
            content?: undefined;
            size?: undefined;
            options?: undefined;
            selectedDate?: undefined;
            placeholder?: undefined;
          }
      )[];
    }
  | {
      name: string;
      layout: string;
      allowedRoles: string[];
      content: (
        | {
            type: string;
            id: string;
            content: string;
            size: string;
            label?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            content: string;
            size?: undefined;
            label?: undefined;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            onClick: string;
            content?: undefined;
            size?: undefined;
          }
      )[];
    }
  | {
      name: string;
      layout: string;
      allowedRoles: string[];
      content: (
        | {
            type: string;
            id: string;
            label: string;
            placeholder: string;
            value: string;
            onClick?: undefined;
          }
        | {
            type: string;
            id: string;
            label: string;
            onClick: string;
            placeholder?: undefined;
            value?: undefined;
          }
      )[];
    }
  | undefined;
