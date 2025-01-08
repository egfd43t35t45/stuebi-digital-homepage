'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { submitContact } from '../actions/submit-contact'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (formData: FormData) => {
    const result = await action(formData)
    if (result && !result.success) {
      setFormErrors(result.errors || {})
    } else {
      setFormErrors({})
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Send us a message and we'll get back to you soon.</CardDescription>
      </CardHeader>
      <form action={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
            {formErrors.name && <p className="text-sm text-red-500">{formErrors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
            {formErrors.email && <p className="text-sm text-red-500">{formErrors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required />
            {formErrors.phone && <p className="text-sm text-red-500">{formErrors.phone[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
            {formErrors.message && <p className="text-sm text-red-500">{formErrors.message[0]}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? 'Sending...' : 'Send Message'}
          </Button>
        </CardFooter>
      </form>
      {state && (
        <div className={`mt-4 p-4 rounded-md ${state.success ? 'bg-green-100' : 'bg-red-100'}`}>
          {state.success ? (
            <div className="flex items-center text-green-700">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <p>{state.message}</p>
            </div>
          ) : (
            <div className="flex items-center text-red-700">
              <AlertCircle className="w-5 h-5 mr-2" />
              <p>There was an error submitting your message. Please try again.</p>
            </div>
          )}
        </div>
      )}
    </Card>
  )
}

