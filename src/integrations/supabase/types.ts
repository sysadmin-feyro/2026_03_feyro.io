export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      article_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      articles: {
        Row: {
          article_number: string
          category_id: string | null
          created_at: string
          description: string | null
          gross_price: number | null
          id: string
          is_active: boolean
          name: string
          net_price: number
          unit: Database["public"]["Enums"]["article_unit"]
          updated_at: string
          user_id: string
          vat_rate: number
        }
        Insert: {
          article_number: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          gross_price?: number | null
          id?: string
          is_active?: boolean
          name: string
          net_price?: number
          unit?: Database["public"]["Enums"]["article_unit"]
          updated_at?: string
          user_id: string
          vat_rate?: number
        }
        Update: {
          article_number?: string
          category_id?: string | null
          created_at?: string
          description?: string | null
          gross_price?: number | null
          id?: string
          is_active?: boolean
          name?: string
          net_price?: number
          unit?: Database["public"]["Enums"]["article_unit"]
          updated_at?: string
          user_id?: string
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "articles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "article_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      aufgabe_labels: {
        Row: {
          aufgabe_id: string
          created_at: string
          id: string
          label_id: string
        }
        Insert: {
          aufgabe_id: string
          created_at?: string
          id?: string
          label_id: string
        }
        Update: {
          aufgabe_id?: string
          created_at?: string
          id?: string
          label_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aufgabe_labels_aufgabe_id_fkey"
            columns: ["aufgabe_id"]
            isOneToOne: false
            referencedRelation: "aufgaben"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aufgabe_labels_label_id_fkey"
            columns: ["label_id"]
            isOneToOne: false
            referencedRelation: "projekt_labels"
            referencedColumns: ["id"]
          },
        ]
      }
      aufgaben: {
        Row: {
          abhaengig_von: string | null
          archiviert: boolean | null
          assigned_to: string[] | null
          beschreibung: string | null
          betrag_festpreis: number | null
          checkliste: Json | null
          created_at: string | null
          erstellt_am: string | null
          faellig_am: string | null
          id: string
          ist_abrechenbar: boolean | null
          meilenstein_id: string | null
          prioritaet: string
          projekt_id: string
          sort_order: number | null
          status: string
          tags: string[] | null
          titel: string
          typ: string
          updated_at: string | null
        }
        Insert: {
          abhaengig_von?: string | null
          archiviert?: boolean | null
          assigned_to?: string[] | null
          beschreibung?: string | null
          betrag_festpreis?: number | null
          checkliste?: Json | null
          created_at?: string | null
          erstellt_am?: string | null
          faellig_am?: string | null
          id?: string
          ist_abrechenbar?: boolean | null
          meilenstein_id?: string | null
          prioritaet?: string
          projekt_id: string
          sort_order?: number | null
          status?: string
          tags?: string[] | null
          titel: string
          typ?: string
          updated_at?: string | null
        }
        Update: {
          abhaengig_von?: string | null
          archiviert?: boolean | null
          assigned_to?: string[] | null
          beschreibung?: string | null
          betrag_festpreis?: number | null
          checkliste?: Json | null
          created_at?: string | null
          erstellt_am?: string | null
          faellig_am?: string | null
          id?: string
          ist_abrechenbar?: boolean | null
          meilenstein_id?: string | null
          prioritaet?: string
          projekt_id?: string
          sort_order?: number | null
          status?: string
          tags?: string[] | null
          titel?: string
          typ?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "aufgaben_abhaengig_von_fkey"
            columns: ["abhaengig_von"]
            isOneToOne: false
            referencedRelation: "aufgaben"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aufgaben_meilenstein_id_fkey"
            columns: ["meilenstein_id"]
            isOneToOne: false
            referencedRelation: "meilensteine"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aufgaben_projekt_id_fkey"
            columns: ["projekt_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
        ]
      }
      aufgaben_kommentare: {
        Row: {
          aufgabe_id: string
          erstellt_am: string | null
          id: string
          text: string
          user_id: string
        }
        Insert: {
          aufgabe_id: string
          erstellt_am?: string | null
          id?: string
          text: string
          user_id: string
        }
        Update: {
          aufgabe_id?: string
          erstellt_am?: string | null
          id?: string
          text?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aufgaben_kommentare_aufgabe_id_fkey"
            columns: ["aufgabe_id"]
            isOneToOne: false
            referencedRelation: "aufgaben"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_logs: {
        Row: {
          action_type: string
          created_at: string
          entity_id: string | null
          entity_type: string | null
          id: string
          message: string | null
          metadata: Json | null
          status: string
          user_id: string
        }
        Insert: {
          action_type: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          message?: string | null
          metadata?: Json | null
          status?: string
          user_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          message?: string | null
          metadata?: Json | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      automation_settings: {
        Row: {
          auto_generate_recurring: boolean
          auto_send_reminders: boolean
          created_at: string
          default_payment_terms_days: number
          email_notifications: boolean
          final_reminder_days_after_due: number
          first_reminder_days_after_due: number
          id: string
          reminder_days_before_due: number
          second_reminder_days_after_due: number
          updated_at: string
          user_id: string
        }
        Insert: {
          auto_generate_recurring?: boolean
          auto_send_reminders?: boolean
          created_at?: string
          default_payment_terms_days?: number
          email_notifications?: boolean
          final_reminder_days_after_due?: number
          first_reminder_days_after_due?: number
          id?: string
          reminder_days_before_due?: number
          second_reminder_days_after_due?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          auto_generate_recurring?: boolean
          auto_send_reminders?: boolean
          created_at?: string
          default_payment_terms_days?: number
          email_notifications?: boolean
          final_reminder_days_after_due?: number
          first_reminder_days_after_due?: number
          id?: string
          reminder_days_before_due?: number
          second_reminder_days_after_due?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          color: string
          created_at: string
          id: string
          name: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string
          created_at?: string
          id?: string
          name: string
          type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          name?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      company_settings: {
        Row: {
          company_address: string | null
          company_city: string | null
          company_country: string | null
          company_email: string | null
          company_name: string | null
          company_phone: string | null
          company_postal_code: string | null
          company_website: string | null
          created_at: string
          default_currency: string | null
          default_payment_terms_days: number | null
          default_vat_rate: number | null
          id: string
          invoice_prefix: string | null
          logo_url: string | null
          offer_prefix: string | null
          tax_number: string | null
          updated_at: string
          user_id: string
          vat_id: string | null
        }
        Insert: {
          company_address?: string | null
          company_city?: string | null
          company_country?: string | null
          company_email?: string | null
          company_name?: string | null
          company_phone?: string | null
          company_postal_code?: string | null
          company_website?: string | null
          created_at?: string
          default_currency?: string | null
          default_payment_terms_days?: number | null
          default_vat_rate?: number | null
          id?: string
          invoice_prefix?: string | null
          logo_url?: string | null
          offer_prefix?: string | null
          tax_number?: string | null
          updated_at?: string
          user_id: string
          vat_id?: string | null
        }
        Update: {
          company_address?: string | null
          company_city?: string | null
          company_country?: string | null
          company_email?: string | null
          company_name?: string | null
          company_phone?: string | null
          company_postal_code?: string | null
          company_website?: string | null
          created_at?: string
          default_currency?: string | null
          default_payment_terms_days?: number | null
          default_vat_rate?: number | null
          id?: string
          invoice_prefix?: string | null
          logo_url?: string | null
          offer_prefix?: string | null
          tax_number?: string | null
          updated_at?: string
          user_id?: string
          vat_id?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          ip_address: unknown
          message: string
          name: string
          status: string
          updated_at: string
          user_agent: string | null
          website: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          ip_address?: unknown
          message: string
          name: string
          status?: string
          updated_at?: string
          user_agent?: string | null
          website?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          ip_address?: unknown
          message?: string
          name?: string
          status?: string
          updated_at?: string
          user_agent?: string | null
          website?: string | null
        }
        Relationships: []
      }
      customer_segments: {
        Row: {
          color: string
          created_at: string
          customer_count: number | null
          description: string | null
          filters: Json
          icon: string | null
          id: string
          is_public: boolean | null
          is_smart: boolean | null
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string
          created_at?: string
          customer_count?: number | null
          description?: string | null
          filters?: Json
          icon?: string | null
          id?: string
          is_public?: boolean | null
          is_smart?: boolean | null
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          customer_count?: number | null
          description?: string | null
          filters?: Json
          icon?: string | null
          id?: string
          is_public?: boolean | null
          is_smart?: boolean | null
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          branche: string | null
          city: string | null
          clone_website: string | null
          company_name: string
          contact_person: string | null
          country: string | null
          created_at: string
          customer_number: string | null
          email: string | null
          id: string
          notes: string | null
          phone: string | null
          postal_code: string | null
          projects: number
          score: number | null
          status: string
          tags: string[] | null
          type: string
          updated_at: string
          user_id: string
          website: string | null
        }
        Insert: {
          address?: string | null
          branche?: string | null
          city?: string | null
          clone_website?: string | null
          company_name: string
          contact_person?: string | null
          country?: string | null
          created_at?: string
          customer_number?: string | null
          email?: string | null
          id?: string
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          projects?: number
          score?: number | null
          status?: string
          tags?: string[] | null
          type?: string
          updated_at?: string
          user_id: string
          website?: string | null
        }
        Update: {
          address?: string | null
          branche?: string | null
          city?: string | null
          clone_website?: string | null
          company_name?: string
          contact_person?: string | null
          country?: string | null
          created_at?: string
          customer_number?: string | null
          email?: string | null
          id?: string
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          projects?: number
          score?: number | null
          status?: string
          tags?: string[] | null
          type?: string
          updated_at?: string
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      dashboard_alerts: {
        Row: {
          action_url: string | null
          alert_type: string
          created_at: string
          entity_id: string | null
          entity_type: string | null
          id: string
          is_dismissed: boolean | null
          is_snoozed: boolean | null
          message: string
          severity: string
          snoozed_until: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          action_url?: string | null
          alert_type: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          is_dismissed?: boolean | null
          is_snoozed?: boolean | null
          message: string
          severity: string
          snoozed_until?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          action_url?: string | null
          alert_type?: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          is_dismissed?: boolean | null
          is_snoozed?: boolean | null
          message?: string
          severity?: string
          snoozed_until?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dashboard_layouts: {
        Row: {
          created_at: string | null
          id: string
          position: number
          size: string | null
          updated_at: string | null
          user_id: string
          visible: boolean | null
          widget_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          position: number
          size?: string | null
          updated_at?: string | null
          user_id: string
          visible?: boolean | null
          widget_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          position?: number
          size?: string | null
          updated_at?: string | null
          user_id?: string
          visible?: boolean | null
          widget_id?: string
        }
        Relationships: []
      }
      document_emails: {
        Row: {
          created_at: string
          document_id: string
          document_type: string
          error_message: string | null
          id: string
          message: string | null
          recipient_email: string
          recipient_name: string | null
          sent_at: string
          status: string
          subject: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          document_id: string
          document_type: string
          error_message?: string | null
          id?: string
          message?: string | null
          recipient_email: string
          recipient_name?: string | null
          sent_at?: string
          status?: string
          subject: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          document_id?: string
          document_type?: string
          error_message?: string | null
          id?: string
          message?: string | null
          recipient_email?: string
          recipient_name?: string | null
          sent_at?: string
          status?: string
          subject?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      document_templates: {
        Row: {
          created_at: string
          default_vat_rate: number | null
          description: string | null
          id: string
          is_default: boolean | null
          items_template: Json | null
          name: string
          notes_template: string | null
          payment_terms_days: number | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          default_vat_rate?: number | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          items_template?: Json | null
          name: string
          notes_template?: string | null
          payment_terms_days?: number | null
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          default_vat_rate?: number | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          items_template?: Json | null
          name?: string
          notes_template?: string | null
          payment_terms_days?: number | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      incoming_invoice_items: {
        Row: {
          article_id: string | null
          article_number: string | null
          created_at: string
          description: string
          id: string
          invoice_id: string
          net_amount: number
          position: number
          quantity: number
          unit: string
          unit_price: number
          updated_at: string
          vat_rate: number
        }
        Insert: {
          article_id?: string | null
          article_number?: string | null
          created_at?: string
          description: string
          id?: string
          invoice_id: string
          net_amount?: number
          position?: number
          quantity?: number
          unit?: string
          unit_price?: number
          updated_at?: string
          vat_rate?: number
        }
        Update: {
          article_id?: string | null
          article_number?: string | null
          created_at?: string
          description?: string
          id?: string
          invoice_id?: string
          net_amount?: number
          position?: number
          quantity?: number
          unit?: string
          unit_price?: number
          updated_at?: string
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_incoming_invoice_items_article"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incoming_invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "incoming_invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      incoming_invoices: {
        Row: {
          amount: number
          attachment_url: string | null
          category_id: string | null
          created_at: string
          description: string | null
          has_attachment: boolean
          id: string
          net_amount: number
          payment_date: string | null
          project_id: string | null
          re_number: string
          receipt_date: string
          status_id: string
          supplier_id: string
          updated_at: string
          user_id: string
          vat_amount: number
        }
        Insert: {
          amount?: number
          attachment_url?: string | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          has_attachment?: boolean
          id?: string
          net_amount?: number
          payment_date?: string | null
          project_id?: string | null
          re_number: string
          receipt_date: string
          status_id: string
          supplier_id: string
          updated_at?: string
          user_id: string
          vat_amount?: number
        }
        Update: {
          amount?: number
          attachment_url?: string | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          has_attachment?: boolean
          id?: string
          net_amount?: number
          payment_date?: string | null
          project_id?: string | null
          re_number?: string
          receipt_date?: string
          status_id?: string
          supplier_id?: string
          updated_at?: string
          user_id?: string
          vat_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_incoming_invoices_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          article_id: string | null
          article_number: string | null
          created_at: string
          description: string
          id: string
          invoice_id: string
          net_amount: number
          position: number
          quantity: number
          unit: string
          unit_price: number
          updated_at: string
          vat_rate: number
        }
        Insert: {
          article_id?: string | null
          article_number?: string | null
          created_at?: string
          description: string
          id?: string
          invoice_id: string
          net_amount?: number
          position?: number
          quantity?: number
          unit?: string
          unit_price?: number
          updated_at?: string
          vat_rate?: number
        }
        Update: {
          article_id?: string | null
          article_number?: string | null
          created_at?: string
          description?: string
          id?: string
          invoice_id?: string
          net_amount?: number
          position?: number
          quantity?: number
          unit?: string
          unit_price?: number
          updated_at?: string
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_invoice_items_article"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_reminders: {
        Row: {
          created_at: string
          email_sent: boolean
          id: string
          invoice_id: string
          invoice_type: string
          message_template: string | null
          reminder_level: number
          reminder_type: string
          scheduled_date: string
          sent_date: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_sent?: boolean
          id?: string
          invoice_id: string
          invoice_type?: string
          message_template?: string | null
          reminder_level?: number
          reminder_type: string
          scheduled_date: string
          sent_date?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_sent?: boolean
          id?: string
          invoice_id?: string
          invoice_type?: string
          message_template?: string | null
          reminder_level?: number
          reminder_type?: string
          scheduled_date?: string
          sent_date?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      invoice_statuses: {
        Row: {
          color: string
          created_at: string
          id: string
          is_default: boolean | null
          name: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          color: string
          created_at?: string
          id?: string
          is_default?: boolean | null
          name: string
          type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          is_default?: boolean | null
          name?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      meilensteine: {
        Row: {
          beschreibung: string | null
          betrag: number | null
          created_at: string
          erstellt_am: string
          faellig_am: string | null
          id: string
          ist_abrechenbar: boolean
          projekt_id: string
          sort_order: number
          status: string
          titel: string
          updated_at: string
          vorlage_id: string | null
        }
        Insert: {
          beschreibung?: string | null
          betrag?: number | null
          created_at?: string
          erstellt_am?: string
          faellig_am?: string | null
          id?: string
          ist_abrechenbar?: boolean
          projekt_id: string
          sort_order?: number
          status?: string
          titel: string
          updated_at?: string
          vorlage_id?: string | null
        }
        Update: {
          beschreibung?: string | null
          betrag?: number | null
          created_at?: string
          erstellt_am?: string
          faellig_am?: string | null
          id?: string
          ist_abrechenbar?: boolean
          projekt_id?: string
          sort_order?: number
          status?: string
          titel?: string
          updated_at?: string
          vorlage_id?: string | null
        }
        Relationships: []
      }
      offer_items: {
        Row: {
          article_id: string | null
          article_number: string | null
          created_at: string
          description: string
          id: string
          net_amount: number
          offer_id: string
          position: number
          quantity: number
          unit: string
          unit_price: number
          updated_at: string
          vat_rate: number
        }
        Insert: {
          article_id?: string | null
          article_number?: string | null
          created_at?: string
          description: string
          id?: string
          net_amount?: number
          offer_id: string
          position?: number
          quantity?: number
          unit?: string
          unit_price?: number
          updated_at?: string
          vat_rate?: number
        }
        Update: {
          article_id?: string | null
          article_number?: string | null
          created_at?: string
          description?: string
          id?: string
          net_amount?: number
          offer_id?: string
          position?: number
          quantity?: number
          unit?: string
          unit_price?: number
          updated_at?: string
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_offer_items_article"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      offers: {
        Row: {
          created_at: string
          customer_id: string | null
          customer_name: string
          description: string | null
          gross_amount: number
          id: string
          net_amount: number
          notes: string | null
          offer_date: string
          offer_number: string
          pipeline_stage: string | null
          project_id: string | null
          status: string
          title: string
          updated_at: string
          user_id: string
          valid_until: string | null
          vat_amount: number
          vat_rate: number
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          customer_name: string
          description?: string | null
          gross_amount?: number
          id?: string
          net_amount?: number
          notes?: string | null
          offer_date?: string
          offer_number: string
          pipeline_stage?: string | null
          project_id?: string | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
          valid_until?: string | null
          vat_amount?: number
          vat_rate?: number
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          customer_name?: string
          description?: string | null
          gross_amount?: number
          id?: string
          net_amount?: number
          notes?: string | null
          offer_date?: string
          offer_number?: string
          pipeline_stage?: string | null
          project_id?: string | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
          valid_until?: string | null
          vat_amount?: number
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_offers_customer"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_offers_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
        ]
      }
      outgoing_invoices: {
        Row: {
          amount: number
          cancellation_reason: string | null
          created_at: string
          customer: string
          customer_id: string | null
          description: string
          due_date: string
          id: string
          invoice_date: string
          invoice_number: string
          invoice_type: string
          net_amount: number
          original_invoice_id: string | null
          project_id: string | null
          status: string
          updated_at: string
          user_id: string
          vat_amount: number
        }
        Insert: {
          amount?: number
          cancellation_reason?: string | null
          created_at?: string
          customer: string
          customer_id?: string | null
          description: string
          due_date: string
          id?: string
          invoice_date: string
          invoice_number: string
          invoice_type?: string
          net_amount?: number
          original_invoice_id?: string | null
          project_id?: string | null
          status?: string
          updated_at?: string
          user_id: string
          vat_amount?: number
        }
        Update: {
          amount?: number
          cancellation_reason?: string | null
          created_at?: string
          customer?: string
          customer_id?: string | null
          description?: string
          due_date?: string
          id?: string
          invoice_date?: string
          invoice_number?: string
          invoice_type?: string
          net_amount?: number
          original_invoice_id?: string | null
          project_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string
          vat_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_outgoing_invoices_customer"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_outgoing_invoices_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outgoing_invoices_original_invoice_id_fkey"
            columns: ["original_invoice_id"]
            isOneToOne: false
            referencedRelation: "outgoing_invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      projekt_aktivitaeten: {
        Row: {
          action_type: string
          created_at: string
          entity_id: string | null
          entity_type: string
          id: string
          message: string | null
          new_value: Json | null
          old_value: Json | null
          projekt_id: string
          user_id: string
        }
        Insert: {
          action_type: string
          created_at?: string
          entity_id?: string | null
          entity_type: string
          id?: string
          message?: string | null
          new_value?: Json | null
          old_value?: Json | null
          projekt_id: string
          user_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string
          id?: string
          message?: string | null
          new_value?: Json | null
          old_value?: Json | null
          projekt_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projekt_aktivitaeten_projekt_id_fkey"
            columns: ["projekt_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
        ]
      }
      projekt_dateien: {
        Row: {
          aufgabe_id: string | null
          datei_url: string
          erstellt_am: string | null
          groesse: number | null
          id: string
          name: string
          projekt_id: string
          typ: string | null
        }
        Insert: {
          aufgabe_id?: string | null
          datei_url: string
          erstellt_am?: string | null
          groesse?: number | null
          id?: string
          name: string
          projekt_id: string
          typ?: string | null
        }
        Update: {
          aufgabe_id?: string | null
          datei_url?: string
          erstellt_am?: string | null
          groesse?: number | null
          id?: string
          name?: string
          projekt_id?: string
          typ?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projekt_dateien_aufgabe_id_fkey"
            columns: ["aufgabe_id"]
            isOneToOne: false
            referencedRelation: "aufgaben"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projekt_dateien_projekt_id_fkey"
            columns: ["projekt_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
        ]
      }
      projekt_labels: {
        Row: {
          color: string
          created_at: string
          description: string | null
          id: string
          name: string
          projekt_id: string
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          projekt_id: string
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          projekt_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projekt_labels_projekt_id_fkey"
            columns: ["projekt_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
        ]
      }
      projekt_notizen: {
        Row: {
          erstellt_am: string | null
          id: string
          inhalt: string | null
          projekt_id: string
          titel: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          erstellt_am?: string | null
          id?: string
          inhalt?: string | null
          projekt_id: string
          titel: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          erstellt_am?: string | null
          id?: string
          inhalt?: string | null
          projekt_id?: string
          titel?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projekt_notizen_projekt_id_fkey"
            columns: ["projekt_id"]
            isOneToOne: false
            referencedRelation: "projekte"
            referencedColumns: ["id"]
          },
        ]
      }
      projekt_vorlagen: {
        Row: {
          beschreibung: string | null
          created_at: string
          erstellt_am: string
          id: string
          name: string
          standard_meilensteine: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          beschreibung?: string | null
          created_at?: string
          erstellt_am?: string
          id?: string
          name: string
          standard_meilensteine?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          beschreibung?: string | null
          created_at?: string
          erstellt_am?: string
          id?: string
          name?: string
          standard_meilensteine?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      projekte: {
        Row: {
          abrechnungsart: string
          archiviert: boolean | null
          beschreibung: string | null
          budget: number | null
          created_at: string | null
          end_datum: string | null
          festpreis_gesamt: number | null
          id: string
          ist_favorit: boolean | null
          kunde_id: string | null
          letzte_aktualisierung: string | null
          name: string
          start_datum: string | null
          status: string
          tags: string[] | null
          updated_at: string | null
          user_id: string
          vorlage_id: string | null
        }
        Insert: {
          abrechnungsart: string
          archiviert?: boolean | null
          beschreibung?: string | null
          budget?: number | null
          created_at?: string | null
          end_datum?: string | null
          festpreis_gesamt?: number | null
          id?: string
          ist_favorit?: boolean | null
          kunde_id?: string | null
          letzte_aktualisierung?: string | null
          name: string
          start_datum?: string | null
          status?: string
          tags?: string[] | null
          updated_at?: string | null
          user_id: string
          vorlage_id?: string | null
        }
        Update: {
          abrechnungsart?: string
          archiviert?: boolean | null
          beschreibung?: string | null
          budget?: number | null
          created_at?: string | null
          end_datum?: string | null
          festpreis_gesamt?: number | null
          id?: string
          ist_favorit?: boolean | null
          kunde_id?: string | null
          letzte_aktualisierung?: string | null
          name?: string
          start_datum?: string | null
          status?: string
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string
          vorlage_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projekte_kunde_id_fkey"
            columns: ["kunde_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      rate_limits: {
        Row: {
          created_at: string
          id: string
          key: string
          last_request: string
          request_count: number
          request_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          last_request?: string
          request_count?: number
          request_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          last_request?: string
          request_count?: number
          request_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      recurring_incoming_invoice_templates: {
        Row: {
          auto_process: boolean
          category_id: string | null
          created_at: string
          description: string | null
          end_date: string | null
          frequency: string
          gross_amount: number
          id: string
          is_active: boolean
          net_amount: number
          next_generation_date: string
          notes: string | null
          start_date: string
          supplier_name: string
          template_name: string
          updated_at: string
          user_id: string
          vat_amount: number
        }
        Insert: {
          auto_process?: boolean
          category_id?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          frequency: string
          gross_amount?: number
          id?: string
          is_active?: boolean
          net_amount?: number
          next_generation_date: string
          notes?: string | null
          start_date: string
          supplier_name: string
          template_name: string
          updated_at?: string
          user_id: string
          vat_amount?: number
        }
        Update: {
          auto_process?: boolean
          category_id?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          frequency?: string
          gross_amount?: number
          id?: string
          is_active?: boolean
          net_amount?: number
          next_generation_date?: string
          notes?: string | null
          start_date?: string
          supplier_name?: string
          template_name?: string
          updated_at?: string
          user_id?: string
          vat_amount?: number
        }
        Relationships: []
      }
      recurring_invoice_templates: {
        Row: {
          auto_send: boolean
          created_at: string
          customer_name: string
          description: string | null
          end_date: string | null
          frequency: string
          gross_amount: number
          id: string
          is_active: boolean
          net_amount: number
          next_generation_date: string
          notes: string | null
          payment_terms_days: number
          start_date: string
          template_name: string
          updated_at: string
          user_id: string
          vat_amount: number
        }
        Insert: {
          auto_send?: boolean
          created_at?: string
          customer_name: string
          description?: string | null
          end_date?: string | null
          frequency?: string
          gross_amount?: number
          id?: string
          is_active?: boolean
          net_amount?: number
          next_generation_date: string
          notes?: string | null
          payment_terms_days?: number
          start_date: string
          template_name: string
          updated_at?: string
          user_id: string
          vat_amount?: number
        }
        Update: {
          auto_send?: boolean
          created_at?: string
          customer_name?: string
          description?: string | null
          end_date?: string | null
          frequency?: string
          gross_amount?: number
          id?: string
          is_active?: boolean
          net_amount?: number
          next_generation_date?: string
          notes?: string | null
          payment_terms_days?: number
          start_date?: string
          template_name?: string
          updated_at?: string
          user_id?: string
          vat_amount?: number
        }
        Relationships: []
      }
      time_entries: {
        Row: {
          created_at: string
          customer_id: string | null
          description: string
          duration_minutes: number | null
          end_time: string | null
          hourly_rate: number | null
          id: string
          is_billable: boolean
          is_billed: boolean
          project_id: string | null
          start_time: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          description: string
          duration_minutes?: number | null
          end_time?: string | null
          hourly_rate?: number | null
          id?: string
          is_billable?: boolean
          is_billed?: boolean
          project_id?: string | null
          start_time: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          description?: string
          duration_minutes?: number | null
          end_time?: string | null
          hourly_rate?: number | null
          id?: string
          is_billable?: boolean
          is_billed?: boolean
          project_id?: string | null
          start_time?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_entries_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activity: {
        Row: {
          activity_type: string
          created_at: string | null
          entity_id: string | null
          entity_type: string | null
          id: string
          ip_address: unknown
          metadata: Json | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          activity_type: string
          created_at?: string | null
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          activity_type?: string
          created_at?: string | null
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_dashboard_settings: {
        Row: {
          created_at: string
          id: string
          monthly_revenue_goal: number | null
          mrr_goal: number | null
          quarterly_revenue_goal: number | null
          updated_at: string
          user_id: string
          yearly_revenue_goal: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          monthly_revenue_goal?: number | null
          mrr_goal?: number | null
          quarterly_revenue_goal?: number | null
          updated_at?: string
          user_id: string
          yearly_revenue_goal?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          monthly_revenue_goal?: number | null
          mrr_goal?: number | null
          quarterly_revenue_goal?: number | null
          updated_at?: string
          user_id?: string
          yearly_revenue_goal?: number | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          require_2fa: boolean | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          require_2fa?: boolean | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          require_2fa?: boolean | null
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_next_generation_date: {
        Args: { frequency: string; input_date: string }
        Returns: string
      }
      check_customer_duplicate: {
        Args: {
          p_company_name?: string
          p_contact_person?: string
          p_email?: string
          p_exclude_id?: string
          p_user_id: string
        }
        Returns: {
          company_name: string
          contact_person: string
          email: string
          id: string
          match_type: string
          similarity_score: number
        }[]
      }
      check_rate_limit_enhanced: {
        Args: {
          p_action_key: string
          p_max_attempts?: number
          p_user_context?: Json
          p_window_minutes?: number
        }
        Returns: boolean
      }
      cleanup_old_rate_limits: { Args: never; Returns: undefined }
      cleanup_rate_limits: { Args: never; Returns: undefined }
      cleanup_security_logs: { Args: never; Returns: undefined }
      generate_customer_number: { Args: never; Returns: string }
      generate_dashboard_alerts: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      generate_offer_number: { Args: never; Returns: string }
      get_current_user_id: { Args: never; Returns: string }
      get_customer_analytics: {
        Args: never
        Returns: {
          avg_invoice_amount: number
          company_name: string
          customer_id: string
          customer_since: string
          last_invoice_date: string
          lifetime_value: number
          payment_success_rate: number
          status: string
          total_invoices: number
          total_projects: number
          user_id: string
        }[]
      }
      get_customer_analytics_for_user: {
        Args: { p_user_id: string }
        Returns: {
          avg_invoice_amount: number
          company_name: string
          customer_id: string
          customer_since: string
          last_invoice_date: string
          lifetime_value: number
          payment_success_rate: number
          status: string
          total_invoices: number
          total_projects: number
          user_id: string
        }[]
      }
      get_dashboard_data: { Args: { p_user_id: string }; Returns: Json }
      get_dashboard_kpis: {
        Args: { p_end_date?: string; p_start_date?: string; p_user_id: string }
        Returns: Json
      }
      get_monthly_revenue: {
        Args: never
        Returns: {
          gross_revenue: number
          invoice_count: number
          month: string
          net_revenue: number
          user_id: string
          vat_revenue: number
        }[]
      }
      get_monthly_revenue_for_user: {
        Args: { p_user_id: string }
        Returns: {
          gross_revenue: number
          invoice_count: number
          month: string
          net_revenue: number
          user_id: string
          vat_revenue: number
        }[]
      }
      get_mrr_and_mre: { Args: { p_user_id: string }; Returns: Json }
      get_security_audit_data: {
        Args: { p_days?: number }
        Returns: {
          affected_users: number
          event_count: number
          event_type: string
          latest_occurrence: string
          severity: string
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_authenticated: { Args: never; Returns: boolean }
      sync_customer_project_counts: { Args: never; Returns: undefined }
      trigger_generate_recurring_invoices: { Args: never; Returns: undefined }
      trigger_send_invoice_reminders: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      article_unit:
        | "Stück"
        | "kg"
        | "g"
        | "l"
        | "ml"
        | "m"
        | "cm"
        | "qm"
        | "cbm"
        | "Stunden"
        | "Tage"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      article_unit: [
        "Stück",
        "kg",
        "g",
        "l",
        "ml",
        "m",
        "cm",
        "qm",
        "cbm",
        "Stunden",
        "Tage",
      ],
    },
  },
} as const
