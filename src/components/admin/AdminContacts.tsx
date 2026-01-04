import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Eye } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  event_type: string | null;
  event_date: string | null;
  attendees: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

export const AdminContacts = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error fetching contacts', description: error.message, variant: 'destructive' });
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({ title: 'Error updating status', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Status updated successfully' });
      fetchContacts();
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      new: 'default',
      read: 'secondary',
      replied: 'outline',
      archived: 'destructive',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  if (loading) {
    return <div className="text-center py-8">Loading contacts...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Submissions ({contacts.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {contacts.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No contact submissions yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{format(new Date(contact.created_at), 'dd/MM/yyyy')}</TableCell>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone || '-'}</TableCell>
                  <TableCell>{contact.event_type || '-'}</TableCell>
                  <TableCell>{getStatusBadge(contact.status)}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Contact Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="font-medium">Name:</label>
                            <p>{contact.name}</p>
                          </div>
                          <div>
                            <label className="font-medium">Email:</label>
                            <p>{contact.email}</p>
                          </div>
                          {contact.phone && (
                            <div>
                              <label className="font-medium">Phone:</label>
                              <p>{contact.phone}</p>
                            </div>
                          )}
                          {contact.company && (
                            <div>
                              <label className="font-medium">Company:</label>
                              <p>{contact.company}</p>
                            </div>
                          )}
                          {contact.event_type && (
                            <div>
                              <label className="font-medium">Event Type:</label>
                              <p>{contact.event_type}</p>
                            </div>
                          )}
                          {contact.event_date && (
                            <div>
                              <label className="font-medium">Event Date:</label>
                              <p>{format(new Date(contact.event_date), 'dd/MM/yyyy')}</p>
                            </div>
                          )}
                          {contact.attendees && (
                            <div>
                              <label className="font-medium">Attendees:</label>
                              <p>{contact.attendees}</p>
                            </div>
                          )}
                          {contact.message && (
                            <div>
                              <label className="font-medium">Message:</label>
                              <p className="whitespace-pre-wrap">{contact.message}</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Select defaultValue={contact.status} onValueChange={(value) => updateStatus(contact.id, value)}>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="read">Read</SelectItem>
                        <SelectItem value="replied">Replied</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};
